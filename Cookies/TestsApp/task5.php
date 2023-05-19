<?php
session_start();
$answer4 = $_POST['answer4'];
$_SESSION['answer4'] = $answer4;
?>
<p class="question">Вопрос 5:</p>
<p class="text">Какое свойство CSS используется для задания ширины элемента?</p>
<form action="task6.php" method="post">
    <input type="radio" name="answer5" value="a"> a) width <br>
    <input type="radio" name="answer5" value="b"> b) height <br>
    <input type="radio" name="answer5" value="c"> c) size <br>
    <input class="btn-submit" type="submit"/>
</form>
