<?php
//print_r($_POST);
$to = "newsletter@xp.network";

$user = $_POST["emails"];
$subject = "Subscriber Email";

$message = "
<html>
<head>
<title>Subscriber Email</title>
</head>
<body>
<p>Subscriber user email : ".$user."</p>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <newsletter@xp.network>' . "\r\n";
$headers .= 'Cc: newsletter@xp.network' . "\r\n";

mail($to,$subject,$message,$headers);

echo "<p>Thanks for subscribe on our website</p>";
?>