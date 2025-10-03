<?php

header('Content-Type: application/json');
require_once __DIR__ . '/common.php';

function getNewsletters($startIndex, $endIndex, $dir = 'desc') {
    [$start, $limit, $direction] = get_pagination_from_get();

    try {
        $pdo = get_pdo();
    $total = (int)$pdo->query('SELECT COUNT(*) FROM newsletters')->fetchColumn();
    $stmt = $pdo->prepare("SELECT file_name, date, created_at, (content IS NOT NULL) AS has_blob FROM newsletters ORDER BY date $direction, file_name $direction LIMIT :limit OFFSET :offset");
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $start, PDO::PARAM_INT);
        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Preserve shape: array of URLs; map to download endpoint including the filename so existing regex continues to work
        $results = array_map(function($r) {
            $v = isset($r['created_at']) ? strtotime($r['created_at']) : time();
            return '/data/php/downloadNewsletter.php?file=' . rawurlencode($r['file_name']) . '&v=' . $v;
        }, $rows);

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
echo json_encode(getNewsletters($start, $end, $direction));