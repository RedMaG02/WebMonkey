<?php
session_start();
$answer5 = $_POST['answer5'];
$_SESSION['answer5'] = $answer5;
?>
<p class="question">Вопрос 6:</p>
<p class="text">Какой элемент HTML используется для создания ненумерованного списка?</p>
<form action="task7.php" method="post">
    <input type="radio" name="answer6" value="a"> a) &lt;ul&gt; <br>
    <input type="radio" name="answer6" value="b"> b) &lt;ol&gt; <br>
    <input type="radio" name="answer6" value="c"> c) &lt;li&gt; <br>
    <input class="btn-submit" type="submit"/>
</form>
