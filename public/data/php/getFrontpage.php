<?php
header('Content-Type: application/json');
require_once __DIR__ . '/common.php';

try {
    $pdo = get_pdo();
    $row = $pdo->query('SELECT header, content, file, created_at FROM frontpage ORDER BY created_at DESC LIMIT 1')->fetch(PDO::FETCH_ASSOC);
    if (!$row) { echo json_encode(null); exit; }
    echo json_encode($row);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
