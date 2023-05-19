<?php
session_start();
$answer8 = $_POST['answer8'];
$_SESSION['answer8'] = $answer8;
?>
<p class="question">Вопрос 9:</p>
<p class="text">Какое свойство CSS используется для задания размера шрифта?</p>
<form action="task10.php" method="post">
    <input type="radio" name="answer9" value="a"> a) font-size <br>
    <input type="radio" name="answer9" value="b"> b) font-family <br>
    <input type="radio" name="answer9" value="c"> c) line-height <br>
    <input class="btn-submit" type="submit"/>
</form>
