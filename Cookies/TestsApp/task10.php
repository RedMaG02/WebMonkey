<?php
session_start();
$answer9 = $_POST['answer9'];
$_SESSION['answer9'] = $answer9;
?>
<p class="question">Вопрос 10:</p>
<p class="text">Какой тег HTML используется для создания ссылки?</p>
<form action="result.php" method="post">
    <input type="radio" name="answer10" value="a"> a) &lt;link&gt; <br>
    <input type="radio" name="answer10" value="b"> b) &lt;anchor&gt; <br>
    <input type="radio" name="answer10" value="c"> c) &lt;a&gt; <br>
    <input class="btn-submit" type="submit"/>
</form>
