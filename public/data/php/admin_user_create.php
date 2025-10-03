<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);
    if (!is_array($body)) { json_error('Invalid JSON', 400); }
    $email = trim($body['email'] ?? '');
    $password = $body['password'] ?? '';
    if ($email === '' || $password === '') { json_error('Missing email or password', 400); }
    $pdo = get_pdo();
    ensure_users_table($pdo);
    $hash = hash_password($password);
    $stmt = $pdo->prepare('INSERT INTO users (email, password_hash) VALUES (:email, :ph)');
    $stmt->execute([':email' => $email, ':ph' => $hash]);
    echo json_encode(['ok' => true, 'id' => (int)$pdo->lastInsertId()]);
} catch (PDOException $e) {
    if (str_contains(strtolower($e->getMessage()), 'unique')) {
        json_error('Email already exists', 409);
    }
    json_error($e->getMessage(), 500);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
