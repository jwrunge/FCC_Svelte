<?php

header('Content-Type: application/json');

function get_pdo(): PDO {
    $dbPath = __DIR__ . DIRECTORY_SEPARATOR . 'site.db';
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function get_video_src($embed_code) {
    $rx = "/(?<=src=[\"|\']).*?(?=[\"|\'])/";
    if (preg_match($rx, $embed_code, $matches)) {
        return $matches[0];
    }
    return null;
}

// Simple auth (reuse existing pword)
if (!isset($_POST['pword']) || $_POST['pword'] !== 'i<3FccGalesburg!') {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Forbidden']);
    exit;
}

$date = $_POST['date'] ?? null; // Expected format YYYY-MM-DD
$title = $_POST['title'] ?? null;
$embed = $_POST['embed'] ?? null; // Full iframe embed code
$src = $_POST['src'] ?? null;     // Optional direct src override
$asset = $_POST['asset'] ?? null; // Optional local asset url

if (!$date) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing date']);
    exit;
}

if (!$src && $embed) {
    $src = get_video_src($embed);
}

try {
    $pdo = get_pdo();
    $sql = 'INSERT INTO sermons (date, title, src, asset) VALUES (:date, :title, :src, :asset)
            ON CONFLICT(date) DO UPDATE SET
                title=COALESCE(excluded.title, sermons.title),
                src=COALESCE(excluded.src, sermons.src),
                asset=COALESCE(excluded.asset, sermons.asset)';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':date' => $date,
        ':title' => $title,
        ':src' => $src,
        ':asset' => $asset,
    ]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}