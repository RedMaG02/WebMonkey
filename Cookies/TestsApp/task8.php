<?php
session_start();
$answer7 = $_POST['answer7'];
$_SESSION['answer7'] = $answer7;
?>
<p class="question">Вопрос 8:</p>
<p class="text">Какой элемент HTML используется для вставки изображения?</p>
<form action="task9.php" method="post">
    <input type="radio" name="answer8" value="a"> a) &lt;img&gt; <br>
    <input type="radio" name="answer8" value="b"> b) &lt;picture&gt; <br>
    <input type="radio" name="answer8" value="c"> c) &lt;image&gt; <br>
    <input class="btn-submit" type="submit"/>
</form>
