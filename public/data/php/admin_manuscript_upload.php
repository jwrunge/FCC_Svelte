<?php
// Upload or replace a manuscript PDF for a given date/title/series
require_once __DIR__ . '/common.php';

require_login();

try {
    if (!isset($_POST['date']) || !isset($_FILES['manuscript'])) {
        json_error('Missing date or file', 400);
    }
    $date = gmdate('Y-m-d', strtotime($_POST['date']));
    $title = $_POST['title'] ?? null;
    $series = $_POST['series'] ?? null;
    $id = isset($_POST['id']) ? (int)$_POST['id'] : 0;
    $file = $_FILES['manuscript'];
    if ($file['error'] !== UPLOAD_ERR_OK) {
        json_error('Upload error: ' . $file['error'], 400);
    }
    // Unique filename ensures a distinct route per upload
    $datePart = date('m.d.y', strtotime($date));
    $filename = $datePart . '-' . uniqid('', true) . '.pdf';
    $blob = file_get_contents($file['tmp_name']);

    $pdo = get_pdo();
    if ($id > 0) {
        // Insert a new row to preserve older manuscripts and their routes
        $stmt = $pdo->prepare('INSERT INTO manuscripts (date, title, series, file_name, mime_type, content, created_at) VALUES (:date, :title, :series, :file_name, :mime_type, :content, CURRENT_TIMESTAMP)');
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':title', $title);
        $stmt->bindValue(':series', $series);
        $stmt->bindValue(':file_name', $filename);
        $stmt->bindValue(':mime_type', 'application/pdf');
        $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        $stmt->execute();
    } else {
        $sql = 'INSERT INTO manuscripts (date, title, series, file_name, mime_type, content)
                VALUES (:date, :title, :series, :file_name, :mime_type, :content)';
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':title', $title);
        $stmt->bindValue(':series', $series);
        $stmt->bindValue(':file_name', $filename);
        $stmt->bindValue(':mime_type', 'application/pdf');
        $stmt->bindValue(':content', $blob, PDO::PARAM_LOB);
        $stmt->execute();
    }
    header('Content-Type: application/json');
    echo json_encode(['ok' => true, 'file_name' => $filename]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
