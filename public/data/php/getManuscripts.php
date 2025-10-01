<?php
header('Content-Type: application/json');
require_once __DIR__ . '/common.php';

try {
    $pdo = get_pdo();
    $rows = $pdo->query('SELECT date, title, series, file_name FROM manuscripts WHERE content IS NOT NULL ORDER BY date DESC')->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($rows);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
