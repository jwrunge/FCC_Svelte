<?php
error_reporting(E_ALL);
ini_set('display_errors', 'On');

function get_video_code($embed_code) {
    $rx = "/(?<=src=[\"|\']).*?(?=[\"|\'])/";
    $matches = array();

    preg_match($rx, $embed_code, $matches);

    if(count($matches)) return $matches[0];
    else return null;
}

//If cms is activated
if(isset($_POST['submit'])) {
    if(isset($_POST["date"])) {
        $formattedDate = date('m.d.y', strToTime($_POST['date']));
    }

    // Handle sermon vid embed
    if($_POST["changed"] == "sermon_video") {
        $url = get_video_code($_POST["embed_code"]);
        if(!$url) echo "<div class='msg err'>There was an error with your embed code. Please double-check it.</div>";
        else {
            $formatted_date = date("Y-m-d", strToTime($_POST["date"]));

            //Assemble JSON
            $json_arr = [
                "title"=> $_POST["title"],
                "date"=> $formatted_date,
                "src"=> $url
            ];

            $res = json_encode($json_arr);
            
            //Put file
            $file = fopen("data/sermons/" . $formatted_date . ".json", "w");
            fwrite($file, $res);
            fclose($file);

            echo "<div class='msg'>Added new sermon video.</div>";
        }
    }

    // Handle manuscript upload
    if($_POST["changed"] == "manuscript") {
        $filename = date("m.d.y", strToTime($_POST["date"])) . ".pdf";

        //Open manuscripts json file and update
        $series = $_POST["series"];
        if(!$series) $series = "";

        try {
            if(file_exists("data/manuscripts.json")) {
                $man_json = json_decode(file_get_contents("data/manuscripts.json"));
            }
            else {
                fopen("data/manuscripts.json", "w");
                $man_json = array();
            }
        }
        catch(Exception $e) {
            $man_json = array();
        }

        $added = [
            "date"=> gmdate("Y-m-d", strToTime($_POST["date"])),
            "title"=> $_POST["title"],
            "series"=> $_POST["series"],
            "file"=> $filename
        ];

        //Make sure we overwrite, not add
        for($i=0; $i<count($man_json); $i++) {
            if($man_json[$i]->date == gmdate("Y-m-d", strToTime($_POST["date"]))) unset($man_json[$i]);
        }
        $man_json = array_values($man_json);

        //Push new
        array_push($man_json, $added);

        //Place manuscript file
        $man_file = $_SERVER["DOCUMENT_ROOT"] . "/data/manuscripts/" . date("m.d.y", strToTime($_POST["date"])) . ".pdf";
        
        if(move_uploaded_file($_FILES["manuscript"]["tmp_name"], $man_file)) {
            echo "<div class='msg'>The file ". basename( $_FILES["manuscript"]["name"]). " has been uploaded.</div>";
        }
        else {
            echo "<div class='msg err'>Sorry, there was an error uploading your file.</div>";
        }

        echo "<div class='msg'>Added manuscript for " . $_POST["title"] . "</div>";

        //Replace manuscript json file
        file_put_contents("data/manuscripts.json", json_encode($man_json));
    }

    // Handle newsletter
    if($_POST["changed"] == "newsletter") {
        $file = $_SERVER["DOCUMENT_ROOT"] . "/data/newsletters/" . $formattedDate . ".pdf";
        
        if (move_uploaded_file($_FILES["newsletter"]["tmp_name"], $file)) {
            echo "<div class='msg'>The file ". basename( $_FILES["newsletter"]["name"]). " has been uploaded.</div>";
        }
        else {
            echo "<div class='msg err'>Sorry, there was an error uploading your file.</div>";
        }
    }

    //Handle event addition
    if($_POST["changed"] == "calendar") {
        date_default_timezone_set('UTC');

        //Open manuscripts json file and update
        try {
            if(file_exists("data/events.json")) {
                $ev_json = json_decode(file_get_contents("data/events.json"));
            }
            else {
                fopen("data/events.json", "w");
                $ev_json = array();
            }
        }
        catch(Exception $e) {
            $ev_json = array();
        }

        //Convert input date to UTC
        $dateTime = date($_POST["date"]);
        $newDateTime = new DateTime($dateTime);
        $newDateTime->setTimezone(new DateTimeZone("UTC"));
        $dateTimeUTC = $newDateTime->format("Y-m-d H:i:s");

        $added = [
            "date"=> $dateTimeUTC,
            "name"=> $_POST["eventName"],
            "description"=> $_POST["eventDescription"],
            "duration"=> $_POST["eventDuration"],
            "location"=> $_POST["eventLocation"]
        ];

        //Make sure we overwrite, not add
        for($i=0; $i<count($ev_json); $i++) {
            if(strtotime($ev_json[$i]->date) < strtotime("now")) unset($ev_json[$i]);
        }
        $ev_json = array_values($ev_json);

        //Push new
        array_push($ev_json, $added);

        //Replace events json file
        file_put_contents("data/events.json", json_encode($ev_json));

        echo "<div class='msg'>Added new event \"" . $_POST["eventName"] . ".\"</div>";
    }

    // Handle front page edit
    if($_POST["changed"] == "frontpage") {
        //Open frontpage json file and update
        $jsonfile = fopen("data/frontpage.json", "w");
        $imgFilename = null;

        if (file_exists($_FILES['frontpageImage']['tmp_name'])) {
            echo "GOT IMAGE FILE" . $_FILES['frontpageImage']['tmp_name'];
            $imgFilename = "uploads" . "/" . time() . "." . pathinfo($_FILES["frontpageImage"]["name"])["extension"];
        }

        echo "IMG FILE NAME:" . $imgFilename;

        $fp_json = [
            "header"=> $_POST["frontpageName"],
            "content"=> $_POST["frontpageContent"],
            "file"=> $imgFilename
        ];

        //Place frontpage file
        fwrite($jsonfile, json_encode($fp_json));

        //Place image file
        if($imgFilename && file_exists($_FILES['frontpageImage']['tmp_name'])) {
            $imgfile = fopen($imgFilename, "w");
            if(move_uploaded_file($_FILES["frontpageImage"]["tmp_name"], $imgFilename)) {
                echo "<div class='msg'>The file ". basename( $_FILES["frontpageImage"]["name"]). " has been uploaded and frontpage data was set.</div>";
            }
            else {
                echo "<div class='msg err'>Sorry, there was an error uploading your file.</div>";
            }
        }
        else {
            echo "<div class='msg'>The frontpage data was set.</div>";
        }
    }
}
else {
    if(!isset($_GET['pword']) || $_GET['pword'] != 'I<3FCC') exit("Unable to authenticate. :-(");
}
?>

<html>
    <!doctype html>
    <head>
        <title>FCC mini CMS</title>
    </head>
    <body>
        <h1>Howdy!</h1>
        <p>Please use the forms below to upload the latest files. <strong>NOTE: All files MUST be a PDF.</strong></p>
        <p>Note: you can only submit in one category at a time. If you edit multiple categories and submit, some data will be lost.</p>

        <div class="blocks">
            <div class="edit-block">
                <h2>Sermon video embed</h2>
                <p>Click the menu on a facebook video post and choose "embed." Copy the code and input in the textbox below.</p>
                <form method='post' action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
                    <input type="hidden" name="changed" value="sermon_video">
                    <label>Title: </label><input type="text" name="title" id="videoTitle" value="<?php echo date('F j, Y', strtotime('last sunday')) ?> Worship Service" required><br>
                    <label>Date: </label><input type='date' name='date' id='videoDate' value="<?php echo date('Y-m-d', strtotime('last sunday')) ?>" required><br>
                    <label>Embed code: </label><textarea name='embed_code' id='embed_code' required></textarea><br>
                    <input type='submit' value='Upload' name='submit'>
                </form>
            </div>
            <div class="edit-block">
                <h2>Sermon manuscript upload</h2>
                <p>Upload a PDF sermon manuscript below. Specify the date of the sermon as well as other information. The date defaults to the current or last Sunday.</p>
                <form method='post' action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
                    <input type="hidden" name="changed" value="manuscript">
                    <label>Title: </label><input type="text" name="title" id="manTitle" value="<?php echo date('F j, Y', strtotime('last sunday')) ?> Worship Service" required><br>
                    <label>Series: </label><input type="text" name="series" id="manSeries"><br>
                    <label>Date: </label><input type='date' name='date' id='manDate' value="<?php echo date('Y-m-d', strtotime('last sunday')) ?>" required><br>
                    <label>File: </label><input type='file' name='manuscript' id='manuscript' required>
                    <input type='submit' value='Upload' name='submit'>
                </form>
            </div>
            <div class="edit-block">
                <h2>Add calendar event</h2>
                <p>Add relevant information below.</p>
                <form method='post' action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
                    <input type="hidden" name="changed" value="calendar">
                    <label for="eventName">Event name: </label><input type='text' name='eventName' id='eventName' required><br>
                    <label for="eventDescription">Description</label><input type='text' name='eventDescription' id='eventDescription' required><br>
                    <label for="eventDuration">Duration (minutes)</label><input type='number' name='eventDuration' id='eventDuration' required><br>
                    <label for="eventLocation">Location</label><input type='text' name='eventLocation' id='eventLocation' value="FCC" required><br>
                    <label>Date: </label><input type='datetime-local' name='date' id='eventDate' value="<?php echo date('Y-m-d', strtotime('today')) ?>" required>
                    <input type='submit' value='Upload' name='submit'>
                </form>
            </div>
            <div class="edit-block">
                <h2>Newsletter upload</h2>
                <p>You'll need to specify the date of the newsletter. The date field will always default to Wednesday of this week.</p>
                <form method='post' action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
                    <input type="hidden" name="changed" value="newsletter">
                    <label>Date: </label><input type='date' name='date' id='date' value="<?php echo date('Y-m-d', strtotime('Wednesday this week')) ?>" required><br>
                    <label>File: </label><input type='file' name='newsletter' id='newsletter' required>
                    <input type='submit' value='Upload' name='submit'>
                </form>
            </div>
            <div class="edit-block">
                <h2>Update front page</h2>
                <p>Specify a header, content, and image.</p>
                <form method='post' action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
                    <input type="hidden" name="changed" value="frontpage">
                    <label for="frontpageName">Header: </label><input type='text' name='frontpageName' id='frontpageName' required><br>
                    <label for="frontpageContent">Content</label><br>
                    <textarea type='text' name='frontpageContent' id='frontpageContent' maxlength="512" required></textarea><br>
                    <label>Image: </label><input type='file' name='frontpageImage' id='frontpageImage'>
                    <input type='submit' value='Upload' name='submit'>
                </form>
            </div>
        </div>

        <script>
            if ( window.history.replaceState ) {
                window.history.replaceState( null, null, window.location.href );
            }
        </script>

        <style>
            h2 {
                margin-top: 2em;
            }

            html, body {
                display: block;
                max-width: 80em;
                width: 90%;
                margin: 1em auto 3em auto;
            }

            textarea {
                display: block;
                width: 90%;
                max-width: 45em;
            }

            input {
                min-width: 10em;
            }

            input[not:[type=hidden]] + input, input[not:[type=hidden]] + label {
                margin-left: 2em;
            }

            label {
                display: inline-block;
                width: 8em;
            }

            input[type=submit] {
                display: block;
                margin: 1em 10%;
                position: absolute;
                bottom: 0;
                width: 80%;
                background: green;
                color: white;
                padding: .5em;
                box-sizing: border-box;
                left: 0;
            }

            input {
                margin-bottom: 1em;
            }

            .blocks {
                display: grid;
                grid-gap: 2em;
                grid-template-columns: 1fr;
            }

            @media screen and (min-width: 1000px) {
                .blocks {
                    grid-template-columns: 1fr 1fr;
                }
            }

            .edit-block {
                padding: 1em;
                padding-top: 0;
                border: 2px solid gray;
                border-radius: 5px;
                position: relative;
                padding-bottom: 3em;
                box-sizing: border-box;
            }

            .msg {
                margin: 0 auto 1em auto;
                padding: 1em;
                border: 2px solid blue;
            }

            .msg.err {
                border: 2px solid red;
                background: red;
                color: white;
            }

            h2 {
                color: rgb(100,75,240);
                margin-top: 1em;
            }
        </style>
    </body>
</html>