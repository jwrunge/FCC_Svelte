<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $id = isset($_POST['id']) ? (int)$_POST['id'] : 0;
    if ($id <= 0) json_error('Missing id', 400);
    $pdo = get_pdo();
    $stmt = $pdo->prepare('DELETE FROM newsletters WHERE id = :id');
    $stmt->execute([':id' => $id]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
