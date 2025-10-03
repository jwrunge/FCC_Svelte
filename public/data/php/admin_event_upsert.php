<?php
// Upsert event (date, name, description, duration, location)
require_once __DIR__ . '/common.php';

require_login();
header('Content-Type: application/json');

try {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);
    if (!is_array($body)) { json_error('Invalid JSON', 400); }
    $date = $body['date'] ?? null; // ISO timestamp expected
    if (!$date) { json_error('Missing date', 400); }
    $pdo = get_pdo();
    $sql = 'INSERT INTO events (date, name, description, duration, location, reveal_date, soft_deleted)
            VALUES (:date, :name, :description, :duration, :location, :reveal_date, :soft_deleted)
            ON CONFLICT(date, name) DO UPDATE SET
                description=excluded.description,
                duration=excluded.duration,
                location=excluded.location';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':date' => $date,
        ':name' => $body['name'] ?? null,
        ':description' => $body['description'] ?? null,
        ':duration' => isset($body['duration']) ? (int)$body['duration'] : null,
        ':location' => $body['location'] ?? null,
        ':reveal_date' => $body['reveal_date'] ?? null,
        ':soft_deleted' => isset($body['soft_deleted']) ? (int)$body['soft_deleted'] : 0,
    ]);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
