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
        $stmt = $pdo->prepare('SELECT file_name, date, content FROM newsletters WHERE id = :id LIMIT 1');
        $stmt->execute([':id' => $id]);
    } elseif ($date) {
        $stmt = $pdo->prepare('SELECT file_name, date, content FROM newsletters WHERE date = :date ORDER BY created_at DESC LIMIT 1');
        $stmt->execute([':date' => $date]);
    } else { // file
        $stmt = $pdo->prepare('SELECT file_name, date, content FROM newsletters WHERE file_name = :file ORDER BY created_at DESC LIMIT 1');
        $stmt->execute([':file' => $file]);
    }

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $filename = $row['file_name'] ?? ($file ?? 'newsletter.pdf');

    $content = $row ? $row['content'] : null;
    if ($content === null) {
        // Fallback to disk path if exists
        $candidate = dirname(__DIR__) . '/newsletters/' . $filename; // .../public/data/newsletters
        if (is_file($candidate)) {
            $content = file_get_contents($candidate);
        }
    }

    if ($content === null) {
        json_error('File was not available on site', 404);
    }

    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
    header('Content-Length: ' . strlen($content));
    header('Cache-Control: private, max-age=3600');
    echo $content;
    exit;
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
