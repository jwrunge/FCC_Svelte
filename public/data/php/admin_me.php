<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $uid = current_user_id();
    if (!$uid) { json_error('Unauthorized', 401); }
    $pdo = get_pdo();
    ensure_users_table($pdo);
    $stmt = $pdo->prepare('SELECT id, email, created_at, updated_at FROM users WHERE id = :id');
    $stmt->execute([':id' => $uid]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$row) { json_error('User not found', 404); }
    echo json_encode(['ok' => true, 'user' => [
        'id' => (int)$row['id'],
        'email' => $row['email'],
        'created_at' => $row['created_at'] ?? null,
        'updated_at' => $row['updated_at'] ?? null,
    ]]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
