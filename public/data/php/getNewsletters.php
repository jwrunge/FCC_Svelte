<?php

function getNewsletters($startIndex, $endIndex, $dir = 'desc') {
    $files = scandir(dirname(__FILE__) . "/../newsletters");

    // if($dir == 'asc') {sort($files);}
    // else {rsort($files);}

    // $limit = [];
    // for($i=$startIndex; $i<$endIndex; $i++) {
    //     if(isset($files[$i])) {
    //         if($files[$i] != '.' && $files[$i] != '..') {
    //             array_push($limit, $files[$i]);
    //         }
    //         else {
    //             $endIndex += 1;
    //         }
    //     }
    // }

    $newsletters = [];
    foreach($files as $nl) {
        $filename = dirname(__FILE__) . "/../newsletters/" . $nl;

        if(file_exists($filename)) {
            array_push($newsletters, "data/newsletters/" . $nl);
        }
    }

    $data = [
        "files"=> count($files),
        "results"=> $newsletters
    ];

    return $data;
}

echo json_encode(getNewsletters($_GET['start'], $_GET['end'], $_GET['direction']));