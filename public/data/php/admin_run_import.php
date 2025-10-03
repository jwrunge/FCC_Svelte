<?php
// Run the JSON/assets import to SQLite from a privileged UI action
require_once __DIR__ . '/common.php';
require_login();
header('Content-Type: application/json');

try {
    $uid = current_user_id();
    if (!$uid) { json_error('Unauthorized', 401); }
    $pdo = get_pdo();
    ensure_users_table($pdo);
    $stmt = $pdo->prepare('SELECT email FROM users WHERE id = :id');
    $stmt->execute([':id' => $uid]);
    $email = $stmt->fetchColumn();
    if (!$email || strtolower($email) !== 'jwrunge@gmail.com') {
        json_error('Forbidden', 403);
    }

    // Include the importer and run main(); set flag to suppress headers
    define('IMPORT_VIA_API', true);
    require_once __DIR__ . '/import_to_sqlite.php';
    // Capture output
    ob_start();
    main();
    $output = ob_get_clean();

    echo json_encode(['ok' => true, 'output' => $output]);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
