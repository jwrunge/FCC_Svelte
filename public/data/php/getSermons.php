<?php

header('Content-Type: application/json');
require_once __DIR__ . '/common.php';

function getSermons($startIndex, $endIndex, $dir = 'desc') {
    [$start, $limit, $direction] = get_pagination_from_get();

    try {
        $pdo = get_pdo();
        // Total count
        $total = (int)$pdo->query('SELECT COUNT(*) FROM sermons')->fetchColumn();

        // Page: order by date then id for stability when multiple sermons share a date
        $stmt = $pdo->prepare("SELECT date, title, src, asset, embed_code FROM sermons ORDER BY date $direction, id $direction LIMIT :limit OFFSET :offset");
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $start, PDO::PARAM_INT);
        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Map rows: if embed_code exists, return social embed (no type); otherwise onsite video with type/poster
        $mapped = array_map(function($r) {
            if (!empty($r['embed_code'])) {
                $src = $r['src'];
                if (preg_match('/(?<=src=["\']).*?(?=["\'])/', (string)$r['embed_code'], $m)) {
                    $src = $m[0];
                }
                return [
                    'date' => $r['date'],
                    'title' => $r['title'],
                    'src' => $src,
                ];
            } else {
                $obj = [
                    'date' => $r['date'],
                    'title' => $r['title'],
                    'src' => $r['src'],
                    'type' => 'onsite',
                ];
                if (!empty($r['asset'])) { $obj['poster'] = $r['asset']; }
                return $obj;
            }
        }, $rows);

        // Preserve original API shape: results is an array of JSON strings
        $results = array_map(function($r) { return json_encode($r); }, $mapped);

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