<?php
// Password reset request and token-based reset
require_once __DIR__ . '/common.php';

function send_reset_link_placeholder(string $email, string $token): void {
    // In production, send email. For now, display the link as a placeholder.
    $link = '/data/php/auth_reset.php?token=' . urlencode($token);
    echo '<p>Reset link (for testing): <a href="' . htmlspecialchars($link) . '">' . htmlspecialchars($link) . '</a></p>';
}

function handle_request_post() {
    $email = trim($_POST['email'] ?? '');
    if (!$email) { echo '<p>Please enter your email.</p>'; return; }
    try {
        $pdo = get_pdo();
        ensure_users_table($pdo);
        ensure_password_resets_table($pdo);
        $stmt = $pdo->prepare('SELECT id FROM users WHERE email = :email');
        $stmt->execute([':email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$user) { echo '<p>If that email exists, a link has been sent.</p>'; return; }
        $token = bin2hex(random_bytes(24));
        $expires = date('Y-m-d H:i:s', time() + 3600); // 1 hour
        $ins = $pdo->prepare('INSERT INTO password_resets (user_id, token, expires_at) VALUES (:uid, :token, :exp)');
        $ins->execute([':uid' => (int)$user['id'], ':token' => $token, ':exp' => $expires]);
        send_reset_link_placeholder($email, $token);
        echo '<p>If that email exists, a link has been sent.</p>';
    } catch (Throwable $e) {
        echo '<p>Error: ' . htmlspecialchars($e->getMessage()) . '</p>';
    }
}

function handle_reset_post() {
    $token = $_POST['token'] ?? '';
    $password = $_POST['password'] ?? '';
    if (!$token || !$password) { echo '<p>Missing fields.</p>'; return; }
    try {
        $pdo = get_pdo();
        ensure_users_table($pdo);
        ensure_password_resets_table($pdo);
        $stmt = $pdo->prepare('SELECT pr.id as prid, u.id as uid FROM password_resets pr JOIN users u ON u.id = pr.user_id WHERE pr.token = :token AND pr.used = 0 AND pr.expires_at > CURRENT_TIMESTAMP');
        $stmt->execute([':token' => $token]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) { echo '<p>Invalid or expired token.</p>'; return; }
        $hash = hash_password($password);
        $upd = $pdo->prepare('UPDATE users SET password_hash = :ph, updated_at = CURRENT_TIMESTAMP WHERE id = :id');
        $upd->execute([':ph' => $hash, ':id' => (int)$row['uid']]);
        $mark = $pdo->prepare('UPDATE password_resets SET used = 1 WHERE id = :id');
        $mark->execute([':id' => (int)$row['prid']]);
        echo '<p>Password updated. You may now <a href="/data/php/auth_login.php">login</a>.</p>';
    } catch (Throwable $e) {
        echo '<p>Error: ' . htmlspecialchars($e->getMessage()) . '</p>';
    }
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$token = $_GET['token'] ?? '';
if ($method === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'request') handle_request_post();
    elseif (isset($_POST['action']) && $_POST['action'] === 'reset') handle_reset_post();
}
?>
<!doctype html>
<html>
<head><title>Password Reset</title></head>
<body>
<h1>Password Reset</h1>
<?php if (!$token): ?>
<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
    <input type="hidden" name="action" value="request">
    <label>Email: </label><input type="email" name="email" required>
    <input type="submit" value="Send reset link">
</form>
<?php else: ?>
<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
    <input type="hidden" name="action" value="reset">
    <input type="hidden" name="token" value="<?php echo htmlspecialchars($token); ?>">
    <label>New password: </label><input type="password" name="password" required>
    <input type="submit" value="Reset password">
</form>
<?php endif; ?>
</body>
</html>
