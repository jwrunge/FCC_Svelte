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
    $sets = ['header = :header', 'content = :content'];
    $params = [
        ':header' => $body['header'] ?? null,
        ':content' => $body['content'] ?? null,
        ':id' => $id,
    ];
    if (array_key_exists('file', $body)) {
        $sets[] = 'file = :file';
        $params[':file'] = $body['file'];
    }
    $sql = 'UPDATE frontpage SET ' . implode(', ', $sets) . ' WHERE id = :id';
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
