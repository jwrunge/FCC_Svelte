<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $pdo = get_pdo();
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (!is_array($data)) { json_error('Invalid JSON body', 400); }
    $id = isset($data['id']) ? intval($data['id']) : 0;
    $date = isset($data['date']) ? (string)$data['date'] : null;
    $title = isset($data['title']) ? (string)$data['title'] : null;
    $src = isset($data['src']) ? trim((string)$data['src']) : null;
    $embed = isset($data['embed']) ? trim((string)$data['embed']) : null;
    if ($id <= 0) { json_error('Missing id', 400); }

    // If embed provided but no src, derive src from embed or store embed string
    if (!$src && $embed) {
        if (preg_match('/(?<=src=[\"\']).*?(?=[\"\'])/', $embed, $m)) {
            $src = $m[0];
        } else {
            $src = $embed;
        }
    }

    $fields = [];
    $params = [':id' => $id];
    if ($date !== null) { $fields[] = 'date = :date'; $params[':date'] = $date; }
    if ($title !== null) { $fields[] = 'title = :title'; $params[':title'] = $title; }
    if ($src !== null) { $fields[] = 'src = :src'; $params[':src'] = $src; }
    if (empty($fields)) { echo json_encode(['ok'=>true]); exit; }
    $sql = 'UPDATE sermons SET ' . implode(', ', $fields) . ' WHERE id = :id';
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
