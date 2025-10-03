<?php
// Upsert sermon video (date/title/src or embed)
require_once __DIR__ . '/common.php';

require_login();
header('Content-Type: application/json');

function get_video_src($embed_code) {
    $rx = "/(?<=src=[\"|\']).*?(?=[\"|\'])/";
    if (preg_match($rx, $embed_code, $matches)) {
        return $matches[0];
    }
    return null;
}

try {
    $input = $_POST;
    if (empty($input)) {
        $raw = file_get_contents('php://input');
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) { $input = $decoded; }
    }
    $date = $input['date'] ?? null; // YYYY-MM-DD
    $title = $input['title'] ?? null;
    $src = $input['src'] ?? null;
    $embed = $input['embed'] ?? null;
    $asset = $input['asset'] ?? null;
    if (!$date) { json_error('Missing date', 400); }
    if (!$src && $embed) { $src = get_video_src($embed); }

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
    json_error($e->getMessage(), 500);
}
