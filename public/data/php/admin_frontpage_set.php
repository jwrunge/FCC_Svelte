<?php
// Insert a new frontpage row (header, content, optional image path). Require login.
require_once __DIR__ . '/common.php';

require_login();
header('Content-Type: application/json');

try {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);
    if (!is_array($body)) { json_error('Invalid JSON', 400); }
    $pdo = get_pdo();
    $sql = 'INSERT INTO frontpage (header, content, file) VALUES (:header, :content, :file)
            ON CONFLICT(header, content, file) DO NOTHING';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':header' => $body['header'] ?? null,
        ':content' => $body['content'] ?? null,
        ':file' => $body['file'] ?? null,
    ]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
