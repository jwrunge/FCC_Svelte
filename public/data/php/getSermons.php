<?php

function getSermons($startIndex, $endIndex, $dir = 'desc') {
    $files = scandir(dirname(__FILE__) . "/../sermons");

    if($dir == 'asc') {sort($files);}
    else {rsort($files);}

    $limit = [];
    for($i=$startIndex; $i<$endIndex; $i++) {
        if(isset($files[$i])) {
            if($files[$i] != '.' && $files[$i] != '..') {
                array_push($limit, $files[$i]);
            }
            else {
                $endIndex += 1;
            }
        }
    }

    $videos = [];
    foreach($limit as $video) {
        $filename = dirname(__FILE__) . "/../sermons/" . $video;

        if(file_exists($filename)) {
            array_push($videos, file_get_contents(dirname(__FILE__) . "/../sermons/" . $video));
        }
    }

    $data = [
        "files"=> count($files),
        "results"=> $videos
    ];

    return $data;
}

echo json_encode(getSermons($_GET['start'], $_GET['end'], $_GET['direction']));