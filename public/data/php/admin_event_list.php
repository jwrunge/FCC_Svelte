<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    [$start, $limit, $direction] = get_pagination_from_get();
    if ($limit <= 0) { $limit = 50; }
    $pdo = get_pdo();
    $total = (int)$pdo->query('SELECT COUNT(*) FROM events WHERE COALESCE(soft_deleted, 0) = 0')->fetchColumn();
    $stmt = $pdo->prepare("SELECT id, date, name, description, duration, location, reveal_date, soft_deleted, created_at FROM events WHERE COALESCE(soft_deleted, 0) = 0 ORDER BY date $direction, id $direction LIMIT :limit OFFSET :offset");
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $start, PDO::PARAM_INT);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['ok' => true, 'total' => $total, 'results' => $rows]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
