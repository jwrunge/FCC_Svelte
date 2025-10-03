<?php
// Upload newsletter PDF and upsert into DB; require login
require_once __DIR__ . '/common.php';

require_login();

try {
    if (!isset($_POST['date']) || !isset($_FILES['newsletter'])) {
        json_error('Missing date or file', 400);
    }
    $date = date('Y-m-d', strtotime($_POST['date']));
    $id = isset($_POST['id']) ? (int)$_POST['id'] : 0;
    $filename = date('m.d.y', strtotime($_POST['date'])) . '.pdf';
    $file = $_FILES['newsletter'];
    if ($file['error'] !== UPLOAD_ERR_OK) {
        json_error('Upload error: ' . $file['error'], 400);
    }
    $blob = file_get_contents($file['tmp_name']);

    $pdo = get_pdo();
    if ($id > 0) {
        $stmt = $pdo->prepare('UPDATE newsletters SET date = :date, file_name = :file_name, content = :content, created_at = CURRENT_TIMESTAMP WHERE id = :id');
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':file_name', $filename);
        $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        $stmt->execute();
    } else {
        $sql = 'INSERT INTO newsletters (date, file_name, content)
                VALUES (:date, :file_name, :content)
                ON CONFLICT(file_name) DO UPDATE SET date=excluded.date';
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':file_name', $filename);
        $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        $stmt->execute();
    }
    header('Content-Type: application/json');
    echo json_encode(['ok' => true, 'file_name' => $filename]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
