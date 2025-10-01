<?php
header('Content-Type: application/json');
require_once __DIR__ . '/common.php';

try {
    $pdo = get_pdo();
    $rows = $pdo->query('SELECT id, src, heading, caption, linktext, focus, text, active FROM slideshow WHERE active = 1 ORDER BY id ASC')->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($rows);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
