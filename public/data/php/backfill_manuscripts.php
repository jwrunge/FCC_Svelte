<?php
// Backfill manuscripts.content BLOBs from disk by matching file_name
// Usage (CLI preferred):
//   php backfill_manuscripts.php
// Or via web (requires login session):
//   /data/php/backfill_manuscripts.php

require_once __DIR__ . '/common.php';

try {
    if (!is_cli()) {
        // Only allow if logged in
        require_login();
    }

    $pdo = get_pdo();

    // Candidate search locations
    $phpDir = __DIR__;
    $publicDataDir = dirname($phpDir); // .../public/data
    $publicManuscripts = $publicDataDir . DIRECTORY_SEPARATOR . 'manuscripts';
    $repoRoot = dirname(dirname($publicDataDir));
    $rootDataDir = $repoRoot . DIRECTORY_SEPARATOR . 'data';
    $rootManuscripts = $rootDataDir . DIRECTORY_SEPARATOR . 'manuscripts';

    $dirs = array_unique(array_filter([$publicManuscripts, $rootManuscripts], 'is_dir'));

    $stmt = $pdo->query("SELECT id, file_name FROM manuscripts WHERE content IS NULL AND file_name IS NOT NULL");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $updated = 0;
    $missing = [];

    foreach ($rows as $row) {
        $found = null;
        foreach ($dirs as $dir) {
            $path = $dir . DIRECTORY_SEPARATOR . $row['file_name'];
            if (is_file($path)) { $found = $path; break; }
        }
        if ($found) {
            $blob = file_get_contents($found);
            if ($blob !== false) {
                $upd = $pdo->prepare('UPDATE manuscripts SET content = :content, mime_type = :mime WHERE id = :id');
                $upd->bindValue(':content', $blob, PDO::PARAM_LOB);
                $upd->bindValue(':mime', 'application/pdf');
                $upd->bindValue(':id', (int)$row['id']);
                $upd->execute();
                $updated++;
            } else {
                $missing[] = $row['file_name'];
            }
        } else {
            $missing[] = $row['file_name'];
        }
    }

    $result = [
        'ok' => true,
        'updated' => $updated,
        'missing' => $missing,
        'searched_dirs' => $dirs,
    ];

    if (is_cli()) {
        echo json_encode($result, JSON_PRETTY_PRINT) . "\n";
    } else {
        header('Content-Type: application/json');
        echo json_encode($result);
    }
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
