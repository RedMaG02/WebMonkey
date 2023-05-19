<?php
session_start();
$answer3 = $_POST['answer3'];
$_SESSION['answer3'] = $answer3;
?>
<p class="question">Вопрос 4:</p>
<p class="text">Какое свойство CSS используется для добавления внешних отступов элементу?</p>
<form action="task5.php" method="post">
    <input type="radio" name="answer4" value="a"> a) padding <br>
    <input type="radio" name="answer4" value="b"> b) margin <br>
    <input type="radio" name="answer4" value="c"> c) border <br>
    <input class="btn-submit" type="submit"/>
</form>
