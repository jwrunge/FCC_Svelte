<?php
/**
 * Import JSON and asset data into a SQLite database with id and insertion date.
 * - Upserts to avoid duplicates across runs and environments.
 * - Reads JSON from repo root /data and assets from /public/data/*.
 *
 * Run from CLI:
 *   php import_to_sqlite.php
 */

ini_set('memory_limit', '512M');
set_time_limit(0);

function base_paths(): array {
    $script = __FILE__;
    $phpDir = dirname($script); // .../public/data/php
    $publicDataDir = dirname($phpDir); // .../public/data
    $publicDir = dirname($publicDataDir); // .../public
    $repoRoot = dirname($publicDir); // repo root
    $rootDataDir = $repoRoot . DIRECTORY_SEPARATOR . 'data';
    return [
        'repoRoot' => $repoRoot,
        'rootDataDir' => $rootDataDir,
        'publicDir' => $publicDir,
        'publicDataDir' => $publicDataDir,
        'phpDir' => $phpDir,
    ];
}

function get_pdo(string $dbPath): PDO {
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('PRAGMA journal_mode=WAL');
    $pdo->exec('PRAGMA foreign_keys=ON');
    return $pdo;
}

function ensure_tables(PDO $pdo): void {
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS manuscripts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            title TEXT,
            series TEXT,
            file_name TEXT,
            mime_type TEXT,
            content BLOB,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )'
    );
    $pdo->exec('CREATE UNIQUE INDEX IF NOT EXISTS idx_manuscripts_date ON manuscripts(date)');

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS newsletters (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            file_name TEXT UNIQUE,
            content BLOB,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )'
    );

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS sermons (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT UNIQUE,
            title TEXT,
            src TEXT,
            asset TEXT,
            embed_code TEXT,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )'
    );
    // For existing databases created before embed_code was added
    try {
        $pdo->exec('ALTER TABLE sermons ADD COLUMN embed_code TEXT');
    } catch (Throwable $e) {
        // ignore if already exists
    }

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            name TEXT,
            description TEXT,
            duration INTEGER,
            location TEXT,
            reveal_date TEXT,
            soft_deleted INTEGER DEFAULT 0,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(date, name)
        )'
    );

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS frontpage (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            header TEXT,
            content TEXT,
            file TEXT,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(header, content, file)
        )'
    );

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS slideshow (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            src TEXT,
            heading TEXT,
            caption TEXT,
            linktext TEXT,
            focus TEXT,
            text TEXT,
            active INTEGER DEFAULT 1,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(src, heading)
        )'
    );
}

function parse_date_any(string $str): ?string {
    // Normalize timezone suffixes like " CDT"
    $str = trim($str);
    // Try strtotime first
    $ts = strtotime($str);
    if ($ts !== false) {
        return gmdate('Y-m-d', $ts);
    }
    return null;
}

function parse_date_from_filename(string $filename): ?string {
    $name = strtolower(pathinfo($filename, PATHINFO_FILENAME));

    // Pattern: YYYY-MM-DD
    if (preg_match('/^(20\d{2})-(\d{2})-(\d{2})$/', $name, $m)) {
        return sprintf('%04d-%02d-%02d', (int)$m[1], (int)$m[2], (int)$m[3]);
    }
    // Pattern: M.D.YY or MM.DD.YY or with YYYY
    if (preg_match('/^(\d{1,2})\.(\d{1,2})\.(\d{2,4})$/', $name, $m)) {
        $y = (int)$m[3];
        if ($y < 100) { $y += 2000; }
        return sprintf('%04d-%02d-%02d', $y, (int)$m[1], (int)$m[2]);
    }
    // Pattern: monDD-YY (e.g., aug29-21, sep12-21)
    if (preg_match('/^([a-z]{3,9})(\d{1,2})-(\d{2})$/', $name, $m)) {
        $mon = substr($m[1], 0, 3);
        $monthMap = [
            'jan'=>1,'feb'=>2,'mar'=>3,'apr'=>4,'may'=>5,'jun'=>6,
            'jul'=>7,'aug'=>8,'sep'=>9,'oct'=>10,'nov'=>11,'dec'=>12,
        ];
        if (isset($monthMap[$mon])) {
            $y = (int)$m[3] + 2000;
            return sprintf('%04d-%02d-%02d', $y, $monthMap[$mon], (int)$m[2]);
        }
    }
    return null;
}

function mime_from_extension(string $path): string {
    $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
    return match($ext) {
        'pdf' => 'application/pdf',
        'html','htm' => 'text/html',
        default => 'application/octet-stream',
    };
}

function read_json_file(string $path) {
    if (!is_file($path)) return null;
    $raw = file_get_contents($path);
    if ($raw === false) return null;
    $data = json_decode($raw, true);
    return $data;
}

function import_events(PDO $pdo, string $eventsJsonPath): void {
    $events = read_json_file($eventsJsonPath);
    if (!$events || !is_array($events)) return;

    $sql = 'INSERT INTO events (date, name, description, duration, location, reveal_date, soft_deleted)
            VALUES (:date, :name, :description, :duration, :location, :reveal_date, :soft_deleted)
            ON CONFLICT(date, name) DO UPDATE SET
              description=excluded.description,
              duration=excluded.duration,
              location=excluded.location';
    $stmt = $pdo->prepare($sql);

    foreach ($events as $ev) {
        $stmt->execute([
            ':date' => $ev['date'] ?? null,
            ':name' => $ev['name'] ?? null,
            ':description' => $ev['description'] ?? null,
            ':duration' => isset($ev['duration']) ? (int)$ev['duration'] : null,
            ':location' => $ev['location'] ?? null,
            ':reveal_date' => $ev['reveal_date'] ?? null,
            ':soft_deleted' => isset($ev['soft_deleted']) ? (int)$ev['soft_deleted'] : 0,
        ]);
    }
}

function import_frontpage(PDO $pdo, string $frontpageJsonPath): void {
    $obj = read_json_file($frontpageJsonPath);
    if (!$obj || !is_array($obj)) return;

    $sql = 'INSERT INTO frontpage (header, content, file) VALUES (:header, :content, :file)
            ON CONFLICT(header, content, file) DO NOTHING';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':header' => $obj['header'] ?? null,
        ':content' => $obj['content'] ?? null,
        ':file' => $obj['file'] ?? null,
    ]);
}

function import_slideshow(PDO $pdo, string $slideshowJsonPath): void {
    $arr = read_json_file($slideshowJsonPath);
    if (!$arr || !is_array($arr)) return;

    $sql = 'INSERT INTO slideshow (src, heading, caption, linktext, focus, text, active)
            VALUES (:src, :heading, :caption, :linktext, :focus, :text, 1)
            ON CONFLICT(src, heading) DO UPDATE SET
                caption=excluded.caption,
                linktext=excluded.linktext,
                focus=excluded.focus,
                text=excluded.text,
                active=1';
    $stmt = $pdo->prepare($sql);

    foreach ($arr as $item) {
        $stmt->execute([
            ':src' => $item['src'] ?? null,
            ':heading' => $item['heading'] ?? null,
            ':caption' => $item['caption'] ?? null,
            ':linktext' => $item['linktext'] ?? null,
            ':focus' => $item['focus'] ?? null,
            ':text' => $item['text'] ?? null,
        ]);
    }
}

function import_sermons(PDO $pdo, string $sermonsDir): void {
    if (!is_dir($sermonsDir)) return;
    $files = glob($sermonsDir . DIRECTORY_SEPARATOR . '*.json');
    sort($files);
    $sql = 'INSERT INTO sermons (date, title, src, asset, embed_code) VALUES (:date, :title, :src, :asset, :embed_code)
            ON CONFLICT(date) DO UPDATE SET
                title=excluded.title,
                src=COALESCE(excluded.src, sermons.src),
                asset=COALESCE(excluded.asset, sermons.asset),
                embed_code=COALESCE(excluded.embed_code, sermons.embed_code)';
    $stmt = $pdo->prepare($sql);

    foreach ($files as $file) {
        $data = read_json_file($file);
        if (!is_array($data)) continue;
        $date = $data['date'] ?? parse_date_from_filename(basename($file));
        $embed = $data['embed'] ?? null;
        $src = $data['src'] ?? null;
        if (!$src && $embed) {
            // Extract src attribute from embed/iframe HTML if present
            if (preg_match('/(?<=src=["\']).*?(?=["\'])/', $embed, $m)) {
                $src = $m[0];
            }
        }
        $stmt->execute([
            ':date' => $date,
            ':title' => $data['title'] ?? null,
            ':src' => $src,
            ':asset' => $data['asset'] ?? null,
            ':embed_code' => $embed,
        ]);
    }
}

function import_newsletters(PDO $pdo, string $newslettersDir): void {
    if (!is_dir($newslettersDir)) return;
    $files = glob($newslettersDir . DIRECTORY_SEPARATOR . '*.pdf');
    sort($files);

    $sql = 'INSERT INTO newsletters (date, file_name, content)
            VALUES (:date, :file_name, :content)
            ON CONFLICT(file_name) DO UPDATE SET
                date=excluded.date';
    $stmt = $pdo->prepare($sql);

    foreach ($files as $file) {
        $date = parse_date_from_filename(basename($file));
        $blob = file_get_contents($file);
        if ($blob === false) continue;
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':file_name', basename($file));
        $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        $stmt->execute();
    }
}

function import_manuscripts_from_dir(PDO $pdo, string $manuscriptsDir): void {
    if (!is_dir($manuscriptsDir)) return;
    $files = glob($manuscriptsDir . DIRECTORY_SEPARATOR . '*.{pdf,PDF}', GLOB_BRACE);
    sort($files);

    $sql = 'INSERT INTO manuscripts (date, file_name, mime_type, content)
            VALUES (:date, :file_name, :mime_type, :content)
            ON CONFLICT(date) DO UPDATE SET
                file_name=COALESCE(excluded.file_name, manuscripts.file_name),
                mime_type=COALESCE(excluded.mime_type, manuscripts.mime_type),
                content=COALESCE(excluded.content, manuscripts.content)';
    $stmt = $pdo->prepare($sql);

    foreach ($files as $file) {
        $date = parse_date_from_filename(basename($file));
        if ($date === null) {
            // Skip PDFs without a parseable date. They may be covered by manuscripts.json
            continue;
        }
        $blob = file_get_contents($file);
        if ($blob === false) continue;
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':file_name', basename($file));
        $stmt->bindValue(':mime_type', mime_from_extension($file));
        $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        $stmt->execute();
    }
}

function import_manuscripts_from_json(PDO $pdo, string $manuscriptsJsonPath, string $manuscriptsDir): void {
    $arr = read_json_file($manuscriptsJsonPath);
    if (!$arr || !is_array($arr)) return;

    $sql = 'INSERT INTO manuscripts (date, title, series, file_name, mime_type, content)
            VALUES (:date, :title, :series, :file_name, :mime_type, :content)
            ON CONFLICT(date) DO UPDATE SET
                title=COALESCE(excluded.title, manuscripts.title),
                series=COALESCE(excluded.series, manuscripts.series),
                file_name=COALESCE(excluded.file_name, manuscripts.file_name),
                mime_type=COALESCE(excluded.mime_type, manuscripts.mime_type),
                content=COALESCE(excluded.content, manuscripts.content)';
    $stmt = $pdo->prepare($sql);

    foreach ($arr as $item) {
        $date = isset($item['date']) ? parse_date_any((string)$item['date']) : null;
        $fileName = $item['file'] ?? null;
        $filePath = $fileName ? ($manuscriptsDir . DIRECTORY_SEPARATOR . $fileName) : null;
        $blob = null;
        $mime = null;
        if ($filePath && is_file($filePath)) {
            $blob = file_get_contents($filePath);
            $mime = mime_from_extension($filePath);
        }
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':title', $item['title'] ?? null);
        $stmt->bindValue(':series', $item['series'] ?? null);
        $stmt->bindValue(':file_name', $fileName);
        $stmt->bindValue(':mime_type', $mime);
        if ($blob !== null) {
            $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        } else {
            $stmt->bindValue(':content', null, PDO::PARAM_NULL);
        }
        $stmt->execute();
    }
}

function main(): void {
    if (php_sapi_name() !== 'cli') {
        header('Content-Type: text/plain');
    }
    $paths = base_paths();
    $dbPath = $paths['phpDir'] . DIRECTORY_SEPARATOR . 'site.db';
    $pdo = get_pdo($dbPath);
    ensure_tables($pdo);

    $eventsJson = $paths['rootDataDir'] . DIRECTORY_SEPARATOR . 'events.json';
    $frontpageJson = $paths['rootDataDir'] . DIRECTORY_SEPARATOR . 'frontpage.json';
    $slideshowJson = $paths['rootDataDir'] . DIRECTORY_SEPARATOR . 'slideshow.json';
    $manuscriptsJson = $paths['rootDataDir'] . DIRECTORY_SEPARATOR . 'manuscripts.json';

    // Fallback to public/data if root /data does not exist in deployment
    if (!is_file($eventsJson)) {
        $alt = $paths['publicDataDir'] . DIRECTORY_SEPARATOR . 'events.json';
        if (is_file($alt)) $eventsJson = $alt;
    }
    if (!is_file($frontpageJson)) {
        $alt = $paths['publicDataDir'] . DIRECTORY_SEPARATOR . 'frontpage.json';
        if (is_file($alt)) $frontpageJson = $alt;
    }
    if (!is_file($slideshowJson)) {
        $alt = $paths['publicDataDir'] . DIRECTORY_SEPARATOR . 'slideshow.json';
        if (is_file($alt)) $slideshowJson = $alt;
    }
    if (!is_file($manuscriptsJson)) {
        // manuscripts.json currently appears only under repo /data
        $alt = $paths['publicDataDir'] . DIRECTORY_SEPARATOR . 'manuscripts.json';
        if (is_file($alt)) $manuscriptsJson = $alt;
    }

    $sermonsDir = $paths['publicDataDir'] . DIRECTORY_SEPARATOR . 'sermons';
    $newslettersDir = $paths['publicDataDir'] . DIRECTORY_SEPARATOR . 'newsletters';
    $manuscriptsDir = $paths['publicDataDir'] . DIRECTORY_SEPARATOR . 'manuscripts';

    import_events($pdo, $eventsJson);
    import_frontpage($pdo, $frontpageJson);
    import_slideshow($pdo, $slideshowJson);
    import_sermons($pdo, $sermonsDir);
    import_newsletters($pdo, $newslettersDir);
    import_manuscripts_from_dir($pdo, $manuscriptsDir);
    import_manuscripts_from_json($pdo, $manuscriptsJson, $manuscriptsDir);

    $summary = [
        'db' => $dbPath,
        'eventsJson' => $eventsJson,
        'frontpageJson' => $frontpageJson,
        'slideshowJson' => $slideshowJson,
        'sermonsDir' => $sermonsDir,
        'newslettersDir' => $newslettersDir,
        'manuscriptsDir' => $manuscriptsDir,
    ];
    echo "Import complete\n" . json_encode($summary, JSON_PRETTY_PRINT) . "\n";
}

main();
