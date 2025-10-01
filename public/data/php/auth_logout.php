<?php
require_once __DIR__ . '/common.php';

start_session_once();

// Clear all session variables
$_SESSION = [];

// If session uses cookies, clear the cookie
if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params['path'], $params['domain'],
        $params['secure'], $params['httponly']
    );
}

// Destroy the session
session_destroy();

// Redirect to login
header('Location: /data/php/auth_login.php');
http_response_code(302);
exit;
