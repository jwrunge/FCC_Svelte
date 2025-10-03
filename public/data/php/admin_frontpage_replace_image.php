<?php
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

function ensure_dir(string $path): void {
    if (!is_dir($path)) { @mkdir($path, 0775, true); }
}

function sanitize_filename(string $name): string {
    $name = preg_replace('/[^A-Za-z0-9._-]+/', '-', $name);
    $name = trim($name, '-');
    return $name === '' ? 'file' : $name;
}

try {
    if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
        json_error('Missing image file', 400);
    }
    $id = isset($_POST['id']) ? (int)$_POST['id'] : 0;

    $tmp = $_FILES['image']['tmp_name'];
    $orig = sanitize_filename($_FILES['image']['name'] ?? 'image');
    $type = mime_content_type($tmp) ?: ($_FILES['image']['type'] ?? '');
    $ext = strtolower(pathinfo($orig, PATHINFO_EXTENSION));
    $okExt = in_array($ext, ['png','jpg','jpeg','gif','webp','svg','svgz'], true);
    if (strpos((string)$type, 'image/') !== 0 && !$okExt) {
        json_error('Invalid image type', 400);
    }

    $publicDir = dirname(dirname(__DIR__)); // .../public
    $imgDir = $publicDir . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . 'frontpage';
    ensure_dir($imgDir);

    $base = pathinfo($orig, PATHINFO_FILENAME);
    $final = $base . '-' . uniqid('', true) . ($ext ? ('.' . $ext) : '');
    $dest = $imgDir . DIRECTORY_SEPARATOR . $final;
    if (!move_uploaded_file($tmp, $dest)) {
        json_error('Failed to store uploaded image', 500);
    }
    $rel = '/uploads/frontpage/' . $final;

    $pdo = get_pdo();
    if ($id > 0) {
        $stmt = $pdo->prepare('UPDATE frontpage SET file = :file, created_at = CURRENT_TIMESTAMP WHERE id = :id');
        $stmt->execute([':file' => $rel, ':id' => $id]);
        echo json_encode(['ok' => true, 'file' => $rel, 'updated' => $id]);
    } else {
        // If no id is provided, replace on the most recent entry
        $row = $pdo->query('SELECT id FROM frontpage ORDER BY created_at DESC LIMIT 1')->fetch(PDO::FETCH_ASSOC);
        if (!$row) { json_error('No frontpage entries exist to update', 400); }
        $fid = (int)$row['id'];
        $stmt = $pdo->prepare('UPDATE frontpage SET file = :file, created_at = CURRENT_TIMESTAMP WHERE id = :id');
        $stmt->execute([':file' => $rel, ':id' => $fid]);
        echo json_encode(['ok' => true, 'file' => $rel, 'updated' => $fid]);
    }
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
