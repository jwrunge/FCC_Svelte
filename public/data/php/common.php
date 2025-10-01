<?php

// Shared helpers for PHP endpoints

function get_db_path(): string {
    return __DIR__ . DIRECTORY_SEPARATOR . 'site.db';
}

function get_pdo(): PDO {
    $dbPath = get_db_path();
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function ensure_users_table(PDO $pdo): void {
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            updated_at TEXT
        )'
    );
}

function ensure_password_resets_table(PDO $pdo): void {
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS password_resets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            token TEXT UNIQUE NOT NULL,
            expires_at TEXT NOT NULL,
            used INTEGER DEFAULT 0,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
        )'
    );
}

function start_session_once(): void {
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function current_user_id(): ?int {
    start_session_once();
    return isset($_SESSION['user_id']) ? intval($_SESSION['user_id']) : null;
}

function require_login(): void {
    if (!current_user_id()) {
        http_response_code(401);
        echo 'Unauthorized';
        exit;
    }
}

function hash_password(string $password): string {
    // password_hash uses per-password salt internally
    return password_hash($password, PASSWORD_DEFAULT);
}

function verify_password(string $password, string $hash): bool {
    return password_verify($password, $hash);
}

// Returns [start, limit, direction]
function get_pagination_from_get(): array {
    $start = isset($_GET['start']) ? max(0, intval($_GET['start'])) : 0;
    $end = isset($_GET['end']) ? max(0, intval($_GET['end'])) : 0;
    $limit = max(0, $end - $start);
    $dir = isset($_GET['direction']) ? strtolower((string)$_GET['direction']) : 'desc';
    $direction = $dir === 'asc' ? 'ASC' : 'DESC';
    return [$start, $limit, $direction];
}

function json_error(string $message, int $status = 500): void {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => $message]);
    exit;
}
