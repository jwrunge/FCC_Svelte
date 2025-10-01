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
