<?php
// Update an event by id
require_once __DIR__ . '/common.php';

require_login();
header('Content-Type: application/json');

try {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);
    if (!is_array($body)) { json_error('Invalid JSON', 400); }
    $id = isset($body['id']) ? intval($body['id']) : 0;
    if ($id <= 0) { json_error('Missing id', 400); }
    $pdo = get_pdo();
    $sql = 'UPDATE events
            SET date = :date,
                name = :name,
                description = :description,
                duration = :duration,
                location = :location,
                reveal_date = :reveal_date
            WHERE id = :id';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':date' => $body['date'] ?? null,
        ':name' => $body['name'] ?? null,
        ':description' => $body['description'] ?? null,
        ':duration' => isset($body['duration']) ? (int)$body['duration'] : null,
        ':location' => $body['location'] ?? null,
        ':reveal_date' => $body['reveal_date'] ?? null,
        ':id' => $id,
    ]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
