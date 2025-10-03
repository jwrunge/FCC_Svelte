<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);
    if (!is_array($body)) { json_error('Invalid JSON', 400); }
    $id = isset($body['id']) ? (int)$body['id'] : 0;
    if ($id <= 0) { json_error('Missing id', 400); }
    $pdo = get_pdo();
    $stmt = $pdo->prepare('UPDATE frontpage SET header = :header, content = :content, file = :file WHERE id = :id');
    $stmt->execute([
        ':header' => $body['header'] ?? null,
        ':content' => $body['content'] ?? null,
        ':file' => $body['file'] ?? null,
        ':id' => $id,
    ]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
