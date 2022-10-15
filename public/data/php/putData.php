<?php

$page_id = "108822552519210";

function get_video_code($embed_code) {
    $rx = "/(?<=src=[\"|\']).*?(?=[\"|\'])/";
    $matches = array();

    preg_match($rx, $embed_code, $matches);

    return $matches[0];
}

if($_POST['pword'] != "i<3FccGalesburg!") {
    exit()
}

if($_POST["embed"]) {
    $code = get_video_code($_POST["embed"])
    
}