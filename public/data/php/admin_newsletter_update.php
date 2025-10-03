<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (!is_array($data)) json_error('Invalid JSON', 400);
    $id = isset($data['id']) ? (int)$data['id'] : 0;
    $date = isset($data['date']) ? gmdate('Y-m-d', strtotime($data['date'])) : null;
    if ($id <= 0 || !$date) json_error('Missing id or date', 400);
    $pdo = get_pdo();
    $stmt = $pdo->prepare('UPDATE newsletters SET date = :date WHERE id = :id');
    $stmt->execute([':date' => $date, ':id' => $id]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
