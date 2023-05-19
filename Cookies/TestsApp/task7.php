<?php
session_start();
$answer6 = $_POST['answer6'];
$_SESSION['answer6'] = $answer6;
?>
<p class="question">Вопрос 7:</p>
<p class="text">Какое свойство CSS используется для выравнивания содержимого по горизонтали внутри блочного элемента?</p>
<form action="task8.php" method="post">
    <input type="radio" name="answer7" value="a"> a) text-align <br>
    <input type="radio" name="answer7" value="b"> b) vertical-align <br>
    <input type="radio" name="answer7" value="c"> c) align-content <br>
    <input class="btn-submit" type="submit"/>
</form>
