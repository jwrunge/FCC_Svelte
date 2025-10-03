<?php
require_once __DIR__ . '/common.php';

try {
    $pdo = get_pdo();

    $id = isset($_GET['id']) ? intval($_GET['id']) : null;
    $date = isset($_GET['date']) ? (string)$_GET['date'] : null;
    $file = isset($_GET['file']) ? (string)$_GET['file'] : null;

    if ($id === null && !$date && !$file) {
        json_error('Missing id, date, or file parameter', 400);
    }

    if ($id !== null) {
        $stmt = $pdo->prepare('SELECT file_name, mime_type, content FROM manuscripts WHERE id = :id LIMIT 1');
        $stmt->execute([':id' => $id]);
    } elseif ($date) {
        // Prefer rows with content present; fall back to newest otherwise
        $stmt = $pdo->prepare('SELECT file_name, mime_type, content FROM manuscripts WHERE date = :date ORDER BY (content IS NULL) ASC, created_at DESC LIMIT 1');
        $stmt->execute([':date' => $date]);
    } else { // file
        $stmt = $pdo->prepare('SELECT file_name, mime_type, content FROM manuscripts WHERE file_name = :file ORDER BY (content IS NULL) ASC, created_at DESC LIMIT 1');
        $stmt->execute([':file' => $file]);
    }

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$row) {
        json_error('Manuscript not found', 404);
    }

    $filename = $row['file_name'] ?: 'manuscript.pdf';
    $mime = $row['mime_type'] ?: 'application/pdf';
    $content = $row['content'];

    // If DB blob is null, try fallback to disk by file_name
    if ($content === null && $row['file_name']) {
        $diskPath = dirname(__DIR__) . '/manuscripts/' . $row['file_name']; // .../public/data/manuscripts
        if (is_file($diskPath)) {
            $content = file_get_contents($diskPath);
        }
    }

    if ($content === null) {
        json_error('File was not available on site', 404);
    }

    header('Content-Type: ' . $mime);
    header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
    header('Content-Length: ' . strlen($content));
    // Disable caching so recently replaced PDFs are always fetched fresh
    header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
    header('Pragma: no-cache');
    header('Expires: 0');

    echo $content;
    exit;
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
