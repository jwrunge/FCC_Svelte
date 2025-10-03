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
    $pdo = get_pdo();

    $input = $_POST;
    if (empty($input)) {
        $raw = file_get_contents('php://input');
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) { $input = $decoded; }
    }
    $id = isset($input['id']) ? intval($input['id']) : 0;
    $date = $input['date'] ?? null; // YYYY-MM-DD
    $title = $input['title'] ?? null;
    $src = isset($input['src']) ? trim((string)$input['src']) : null;
    $embed = isset($input['embed']) ? trim((string)$input['embed']) : null;
    $asset = null; // no poster support
    if (!$date) { json_error('Missing date', 400); }
    // If no explicit src, try to derive from embed; if that fails, store the embed string itself
    if (!$src && $embed) {
        $derived = get_video_src($embed);
        $src = $derived ?: $embed;
    }
    if (!$src) { json_error('Missing src or embed code', 400); }
    
    if ($id > 0) {
        $stmt = $pdo->prepare('UPDATE sermons SET date=:date, title=:title, src=:src WHERE id=:id');
        $stmt->execute([
            ':id' => $id,
            ':date' => $date,
            ':title' => $title,
            ':src' => $src,
        ]);
    } else {
        // Insert new row to allow multiple sermons per date
        $sql = 'INSERT INTO sermons (date, title, src, asset) VALUES (:date, :title, :src, :asset)';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':date' => $date,
            ':title' => $title,
            ':src' => $src,
            ':asset' => $asset,
        ]);
    }
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
