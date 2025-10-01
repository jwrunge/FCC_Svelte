<?php

header('Content-Type: application/json');

function get_pdo(): PDO {
    $dbPath = __DIR__ . DIRECTORY_SEPARATOR . 'site.db';
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function getSermons($startIndex, $endIndex, $dir = 'desc') {
    $start = max(0, intval($startIndex));
    $end = max(0, intval($endIndex));
    $limit = max(0, $end - $start);
    $direction = strtolower($dir) === 'asc' ? 'ASC' : 'DESC';

    try {
        $pdo = get_pdo();
        // Total count
        $total = (int)$pdo->query('SELECT COUNT(*) FROM sermons')->fetchColumn();

        // Page
        $stmt = $pdo->prepare("SELECT date, title, src, asset FROM sermons ORDER BY date $direction LIMIT :limit OFFSET :offset");
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $start, PDO::PARAM_INT);
        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Preserve original API shape: results is an array of JSON strings
        $results = array_map(function($r) { return json_encode($r); }, $rows);

        return [
            'files' => $total,
            'results' => $results
        ];
    } catch (Throwable $e) {
        http_response_code(500);
        return [
            'files' => 0,
            'results' => [],
            'error' => $e->getMessage()
        ];
    }
}

$start = $_GET['start'] ?? 0;
$end = $_GET['end'] ?? 0;
$direction = $_GET['direction'] ?? 'desc';
echo json_encode(getSermons($start, $end, $direction));