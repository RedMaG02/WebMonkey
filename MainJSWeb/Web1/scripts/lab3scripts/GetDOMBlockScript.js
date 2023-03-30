var root = document.documentElement;

var blocks = root.querySelectorAll("div");

var str = document.getElementsByClassName("pageBlocks")

str.item(0).textContent = "Количество блоков: " + blocks.length