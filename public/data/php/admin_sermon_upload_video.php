<?php
// Upload a local video for a sermon and insert a new row
require_once __DIR__ . '/common.php';

require_login();
header('Content-Type: application/json');

function ensure_dir(string $path): void {
    if (!is_dir($path)) {
        @mkdir($path, 0775, true);
    }
}

function sanitize_filename(string $name): string {
    $name = preg_replace('/[^A-Za-z0-9._-]+/', '-', $name);
    $name = trim($name, '-');
    if ($name === '' ) { $name = 'file'; }
    return $name;
}

try {
    if (empty($_POST)) {
        // Some clients may send JSON accidentally; guide them
        json_error('Use multipart/form-data with fields: date, title, video(=file)', 400);
    }
    $id = isset($_POST['id']) ? intval($_POST['id']) : 0;
    $date = $_POST['date'] ?? null;
    $title = $_POST['title'] ?? null;
    if (!$date) { json_error('Missing date', 400); }

    if (!isset($_FILES['video']) || $_FILES['video']['error'] !== UPLOAD_ERR_OK) {
        json_error('Missing video file', 400);
    }

    $videoTmp = $_FILES['video']['tmp_name'];
    $videoName = sanitize_filename($_FILES['video']['name'] ?? 'video');
    $videoType = mime_content_type($videoTmp) ?: ($_FILES['video']['type'] ?? '');
    if (strpos($videoType, 'video/') !== 0) {
        // allow common extensions fallback
        $ext = strtolower(pathinfo($videoName, PATHINFO_EXTENSION));
        $ok = in_array($ext, ['mp4','mov','webm','m4v','avi'], true);
        if (!$ok) {
            json_error('Invalid video type', 400);
        }
    }

    // Compute target paths
    $publicDir = dirname(dirname(__DIR__)); // .../public
    $videosDir = $publicDir . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . 'videos';
    ensure_dir($videosDir);

    $base = pathinfo($videoName, PATHINFO_FILENAME);
    $ext = strtolower(pathinfo($videoName, PATHINFO_EXTENSION));
    $finalVideoName = $date . '-' . $base . '-' . uniqid('', true) . ($ext ? ('.' . $ext) : '');
    $finalVideoPath = $videosDir . DIRECTORY_SEPARATOR . $finalVideoName;
    if (!move_uploaded_file($videoTmp, $finalVideoPath)) {
        json_error('Failed to store uploaded video', 500);
    }

    $videoSrc = '/uploads/videos/' . $finalVideoName;

    $pdo = get_pdo();
    if ($id > 0) {
        // Update existing sermon
        $stmt = $pdo->prepare('UPDATE sermons SET src = :src WHERE id = :id');
        $stmt->execute([':src' => $videoSrc, ':id' => $id]);
        echo json_encode(['ok' => true, 'src' => $videoSrc, 'updated' => $id]);
    } else {
        // Insert a new row (multiple per date allowed)
        $stmt = $pdo->prepare('INSERT INTO sermons (date, title, src, asset) VALUES (:date, :title, :src, NULL)');
        $stmt->execute([
            ':date' => $date,
            ':title' => $title,
            ':src' => $videoSrc,
        ]);
        echo json_encode(['ok' => true, 'src' => $videoSrc]);
    }
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
