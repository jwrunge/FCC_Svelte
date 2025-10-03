<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $pdo = get_pdo();
    $stmt = $pdo->query('SELECT id, date, title, src, asset, created_at FROM sermons ORDER BY date DESC, id DESC LIMIT 25');
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $mapped = array_map(function($r) {
        $src = (string)($r['src'] ?? '');
        $isLocal = strpos($src, '/uploads/videos/') === 0;
        $obj = [
            'id' => (int)$r['id'],
            'date' => $r['date'],
            'title' => $r['title'],
            'src' => $src,
            'type' => $isLocal ? 'onsite' : 'embed',
            'created_at' => $r['created_at'],
        ];
        return $obj;
    }, $rows);

    echo json_encode(['ok' => true, 'items' => $mapped]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
