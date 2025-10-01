<?php
// Newsletter upload & DB upsert
// - Auth with pword (same as old: I<3FCC)
// - Saves file to /data/newsletters/MM.DD.YY.pdf under the web root
// - Upserts into SQLite newsletters table (file_name, date, content BLOB)

require_once __DIR__ . '/common.php';

function ensure_newsletters_table(PDO $pdo): void {
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS newsletters (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            file_name TEXT UNIQUE,
            content BLOB,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )'
    );
}

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }

function handle_post(): void {
    if (!isset($_POST['pword']) || $_POST['pword'] !== 'I<3FCC') {
        http_response_code(403);
        echo '<p>Unable to authenticate. :-(</p>';
        exit;
    }

    if (!isset($_POST['date']) || !isset($_FILES['newsletter'])) {
        http_response_code(400);
        echo '<p>Missing date or file.</p>';
        exit;
    }

    $dateInput = $_POST['date'];
    $date = date('Y-m-d', strtotime($dateInput));
    $formattedDate = date('m.d.y', strtotime($dateInput));

    $fileField = $_FILES['newsletter'];
    if ($fileField['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo '<p>Error uploading file (code ' . h($fileField['error']) . ').</p>';
        exit;
    }

    // Only allow PDF by extension (accept legacy naming)
    $targetDir = rtrim($_SERVER['DOCUMENT_ROOT'], '/') . '/data/newsletters';
    if (!is_dir($targetDir)) {
        if (!mkdir($targetDir, 0775, true)) {
            http_response_code(500);
            echo '<p>Unable to create target directory.</p>';
            exit;
        }
    }
    $fileName = $formattedDate . '.pdf';
    $destPath = $targetDir . '/' . $fileName;

    // Move to final destination
    if (!move_uploaded_file($fileField['tmp_name'], $destPath)) {
        http_response_code(500);
        echo '<p>Sorry, there was an error uploading your file.</p>';
        exit;
    }

    // Upsert into SQLite
    try {
        $pdo = get_pdo();
        ensure_newsletters_table($pdo);
        $sql = 'INSERT INTO newsletters (date, file_name, content)
                VALUES (:date, :file_name, :content)
                ON CONFLICT(file_name) DO UPDATE SET date=excluded.date';
        $stmt = $pdo->prepare($sql);
        $blob = file_get_contents($destPath);
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':file_name', $fileName);
        $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        $stmt->execute();

        echo '<p>Yay! The file ' . h($fileName) . ' has been uploaded and saved.</p>';
        echo '<p><a href="/data/newsletters/' . h($fileName) . '" target="_blank">View newsletter</a></p>';
    } catch (Throwable $e) {
        http_response_code(500);
        echo '<p>Upload succeeded, but database update failed: ' . h($e->getMessage()) . '</p>';
    }
}

function handle_get(): void {
    if (!isset($_GET['pword']) || $_GET['pword'] !== 'I<3FCC') {
        http_response_code(403);
        echo 'Unable to authenticate. :-(';
        exit;
    }

    $thisWeek = date('Y-m-d', strtotime('Wednesday this week'));
    echo '<h1>Howdy!</h1>';
    echo '<p>Please use the form below to upload the latest newsletter. <strong>NOTE: Newsletter file MUST be a PDF.</strong></p>';
    echo "<p>You'll also need to specify the date of the newsletter. The date field will always default to Wednesday of this week.</p>";

    echo '<form method="post" action="' . h($_SERVER['PHP_SELF']) . '" enctype="multipart/form-data">';
    echo '<input type="hidden" name="pword" value="' . h($_GET['pword']) . '">';
    echo '<input type="file" name="newsletter" id="newsletter" required> ';
    echo '<input type="date" name="date" id="date" value="' . h($thisWeek) . '" required> ';
    echo '<input type="submit" value="Upload" name="submit">';
    echo '</form>';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    handle_post();
} else {
    handle_get();
}
