<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $pdo = get_pdo();
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if ($id <= 0) { json_error('Missing id', 400); }
    $stmt = $pdo->prepare('DELETE FROM sermons WHERE id = :id');
    $stmt->execute([':id' => $id]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
