<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    [$start, $limit, $direction] = get_pagination_from_get();
    if ($limit <= 0) { $limit = 25; }
    $pdo = get_pdo();
    $total = (int)$pdo->query('SELECT COUNT(*) FROM manuscripts')->fetchColumn();
    $stmt = $pdo->prepare("SELECT id, date, title, series, file_name, (content IS NOT NULL) AS has_blob, created_at FROM manuscripts ORDER BY date $direction, id $direction LIMIT :limit OFFSET :offset");
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $start, PDO::PARAM_INT);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['ok' => true, 'total' => $total, 'results' => $rows]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
