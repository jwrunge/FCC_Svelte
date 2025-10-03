<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);
    if (!is_array($body)) { json_error('Invalid JSON', 400); }
    $id = isset($body['id']) ? (int)$body['id'] : 0;
    $password = $body['password'] ?? '';
    if ($id <= 0 || $password === '') { json_error('Missing id or password', 400); }
    $pdo = get_pdo();
    ensure_users_table($pdo);
    $hash = hash_password($password);
    $stmt = $pdo->prepare('UPDATE users SET password_hash = :ph, updated_at = CURRENT_TIMESTAMP WHERE id = :id');
    $stmt->execute([':ph' => $hash, ':id' => $id]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
