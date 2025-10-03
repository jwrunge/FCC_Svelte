<?php
header('Content-Type: application/json');
require_once __DIR__ . '/common.php';

try {
    $pdo = get_pdo();
    $rows = $pdo->query('SELECT id, date, name, description, duration, location, reveal_date, soft_deleted FROM events WHERE COALESCE(soft_deleted, 0) = 0 ORDER BY date ASC')->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($rows);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
