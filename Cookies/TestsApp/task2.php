<?php
session_start();
$answer1 = $_POST['answer1'];
$_SESSION['answer1'] = $answer1;
?>
<p class="question">Вопрос 2:</p>
<p class="text">Какое свойство CSS используется для задания фона элемента?</p>
<form action="task3.php" method="post">
    <input type="radio" name="answer2" value="a"> a) background-color <br>
    <input type="radio" name="answer2" value="b"> b) color <br>
    <input type="radio" name="answer2" value="c"> c) font-size <br>
    <input class="btn-submit" type="submit"/>
</form>
