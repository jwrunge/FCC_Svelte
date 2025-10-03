<?php
// Simple login form and handler
require_once __DIR__ . '/common.php';

start_session_once();

function sanitize_redirect($path) {
    // Only allow local paths starting with '/'
    if (!is_string($path) || $path === '') return '/#admin';
    if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) return '/#admin';
    if ($path[0] !== '/') return '/#admin';
    // prevent // trick
    if (strpos($path, "//") === 0) return '/#admin';
    return $path;
}

function handle_post() {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $redirect = sanitize_redirect($_POST['redirect'] ?? '/cms.php');

    if (!$email || !$password) {
        echo '<p>Missing credentials.</p>';
        return;
    }

    try {
        $pdo = get_pdo();
        ensure_users_table($pdo);
        $stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE email = :email');
        $stmt->execute([':email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($user && verify_password($password, $user['password_hash'])) {
            $_SESSION['user_id'] = (int)$user['id'];
            header('Location: ' . $redirect);
            http_response_code(302);
            exit;
        } else {
            echo '<p>Invalid email or password.</p>';
        }
    } catch (Throwable $e) {
        echo '<p>Error: ' . htmlspecialchars($e->getMessage()) . '</p>';
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    handle_post();
}

$redirect = sanitize_redirect($_GET['redirect'] ?? '/#admin');
if (current_user_id()) {
    header('Location: ' . $redirect);
    http_response_code(302);
    exit;
}

?>
<!doctype html>
<html>
<head><title>Login</title></head>
<body>
<h1>Login</h1>
<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
    <input type="hidden" name="redirect" value="<?php echo htmlspecialchars($redirect); ?>">
    <label>Email: </label><input type="email" name="email" required><br>
    <label>Password: </label><input type="password" name="password" required><br>
    <input type="submit" value="Login">
</form>
<p><a href="/data/php/auth_reset.php">Forgot password?</a></p>
</body>
</html>
