<?php
session_start();
$answer10 = $_POST['answer10'];
$_SESSION['answer10'] = $answer10;

$questions = array(
    '1' => 'a',
    '2' => 'a',
    '3' => 'a',
    '4' => 'b',
    '5' => 'a',
    '6' => 'a',
    '7' => 'a',
    '8' => 'a',
    '9' => 'a',
    '10' => 'c'
);

$num_correct = 0;


foreach ($questions as $num => $answer) {
    if (isset($_SESSION['answer'.$num])) {
        if ($_SESSION['answer'.$num] == $answer)
            $num_correct++;
    }
}

echo "<p>Вы ответили правильно на $num_correct из ".count($questions)." вопросов.</p>";


session_unset();
session_destroy();
?>

