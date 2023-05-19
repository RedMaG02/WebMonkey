<!DOCTYPE html>
<html>
<head>
    <title>Список подписчиков</title>
</head>
<body>
<h2>Список подписчиков</h2>

<?php

if (isset($_POST['email'])) {

    $email = $_POST['email'];


    $subscribers = [];


    $filename = 'subscribers.txt';
    if (file_exists($filename)) {
        $subscribers = explode("\n", file_get_contents($filename));
    }


    if (!in_array($email, $subscribers)) {
        $subscribers[] = $email;
    }


    file_put_contents($filename, implode("\n", $subscribers));


    echo "<ul>";
    foreach ($subscribers as $subscriber) {
        echo "<li>$subscriber</li>";
    }
    echo "</ul>";
}
?>

</body>
</html>