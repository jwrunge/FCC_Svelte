<?php
header('Content-Type: application/json');
require_once __DIR__ . '/common.php';

// There is no table yet; if needed, we can create one. For now, return a hard-coded array or empty list.
try {
    $pdo = get_pdo();
    // Optional: create a simple table if not exists
    $pdo->exec('CREATE TABLE IF NOT EXISTS love_phrases (id INTEGER PRIMARY KEY AUTOINCREMENT, phrase TEXT NOT NULL, active INTEGER DEFAULT 1, created_at TEXT DEFAULT CURRENT_TIMESTAMP)');
    $rows = $pdo->query('SELECT phrase FROM love_phrases WHERE active = 1 ORDER BY id ASC')->fetchAll(PDO::FETCH_COLUMN);
    echo json_encode($rows);
} catch (Throwable $e) {
    json_error($e->getMessage(), 500);
}
