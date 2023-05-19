<?php
session_start();
$answer2 = $_POST['answer2'];
$_SESSION['answer2'] = $answer2;
?>
<p class="question">Вопрос 3:</p>
<p class="text">Какой элемент HTML используется для создания таблицы?</p>
<form action="task4.php" method="post">
    <input type="radio" name="answer3" value="a"> a) &lt;table&gt; <br>
    <input type="radio" name="answer3" value="b"> b) &lt;tr&gt; <br>
    <input type="radio" name="answer3" value="c"> c) &lt;td&gt; <br>
    <input class="btn-submit" type="submit"/>
</form>
