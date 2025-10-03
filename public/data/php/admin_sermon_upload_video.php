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
        json_error('Use multipart/form-data with fields: date, title, video(=file), poster(optional image)', 400);
    }
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

    // Optional poster image
    $posterSrc = null;
    if (isset($_FILES['poster']) && $_FILES['poster']['error'] === UPLOAD_ERR_OK) {
        $posterTmp = $_FILES['poster']['tmp_name'];
        $posterName = sanitize_filename($_FILES['poster']['name'] ?? 'poster');
        $posterType = mime_content_type($posterTmp) ?: ($_FILES['poster']['type'] ?? '');
        if (strpos($posterType, 'image/') === 0) {
            $pext = strtolower(pathinfo($posterName, PATHINFO_EXTENSION));
            $finalPosterName = $date . '-' . pathinfo($posterName, PATHINFO_FILENAME) . '-' . uniqid('', true) . ($pext ? ('.' . $pext) : '');
            $finalPosterPath = $videosDir . DIRECTORY_SEPARATOR . $finalPosterName;
            if (move_uploaded_file($posterTmp, $finalPosterPath)) {
                $posterSrc = '/uploads/videos/' . $finalPosterName;
            }
        }
    }

    $videoSrc = '/uploads/videos/' . $finalVideoName;

    // Insert a new row (multiple per date allowed)
    $pdo = get_pdo();
    $stmt = $pdo->prepare('INSERT INTO sermons (date, title, src, asset, embed_code) VALUES (:date, :title, :src, :asset, NULL)');
    $stmt->execute([
        ':date' => $date,
        ':title' => $title,
        ':src' => $videoSrc,
        ':asset' => $posterSrc,
    ]);

    echo json_encode(['ok' => true, 'src' => $videoSrc, 'poster' => $posterSrc]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
