<?php

//If file is uploaded
if(isset($_POST['submit'])) {
    $formattedDate = date('m.d.y', strToTime($_POST['date']));

    $file = $_SERVER["DOCUMENT_ROOT"] . "/data/newsletters/" . $formattedDate . ".pdf";
    
    if (move_uploaded_file($_FILES["newsletter"]["tmp_name"], $file)) {
        echo "Yay! The file ". basename( $_FILES["newsletter"]["name"]). " has been uploaded.";
    }
    else {
        echo "Sorry, there was an error uploading your file.";
    }
}
else {
    if(!isset($_GET['pword']) || $_GET['pword'] != 'I<3FCC') exit("Unable to authenticate. :-(");
}
?>

<h1>Howdy!</h1>
<p>Please use the form below to upload the latest newsletter. <strong>NOTE: Newsletter file MUST be a PDF.</strong></p>
<p>You'll also need to specify the date of the newsletter. The date field will always default to Wednesday of this week.</p>

<form method='post' action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
    <input type='file' name='newsletter' id='newsletter' required>
    <input type='date' name='date' id='date' value="<?php echo date('Y-m-d', strtotime('Wednesday this week')) ?>" required>
    <input type='submit' value='Upload' name='submit'>
</form>