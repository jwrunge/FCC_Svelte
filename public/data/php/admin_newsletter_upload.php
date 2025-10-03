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
    // Always create a unique filename so each upload has a distinct route
    $datePart = date('m.d.y', strtotime($_POST['date']));
    $filename = $datePart . '-' . uniqid('', true) . '.pdf';
    $file = $_FILES['newsletter'];
    if ($file['error'] !== UPLOAD_ERR_OK) {
        json_error('Upload error: ' . $file['error'], 400);
    }
    $blob = file_get_contents($file['tmp_name']);

    $pdo = get_pdo();
    if ($id > 0) {
        // Create a new row to avoid overwriting existing file_name/content
        $stmt = $pdo->prepare('INSERT INTO newsletters (date, file_name, content, created_at) VALUES (:date, :file_name, :content, CURRENT_TIMESTAMP)');
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':file_name', $filename);
        $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        $stmt->execute();
    } else {
        $sql = 'INSERT INTO newsletters (date, file_name, content) VALUES (:date, :file_name, :content)';
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
