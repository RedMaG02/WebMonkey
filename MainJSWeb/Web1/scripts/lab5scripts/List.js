function RemoveByIndex(x) {
    console.log(x);
    let i = x.rowIndex;
    let table = document.getElementById("dynamicTable");

    console.log(i);
    if (i == table.rows.length - 1) {
    alert("Там нечего удалять");
} else {
        const elementInfo = table.rows[i + 1].innerText;
        const confirmation = confirm(`Вы уверены, что хотите удалить элемент ${elementInfo} ?`);
        if(confirmation) {
            table.rows[i + 1].remove();
        }
}
}

    function insertRow() {
    let i = document.getElementById("input5").value;

    let table = document.getElementById("dynamicTable");
    if (i != "" && i <= table.lastChild.childElementCount) {
    let row = table.insertRow(i);
    let newTD = document.createElement("td");
    newTD.textContent = prompt("Введите значение");
        row.appendChild(newTD);
        row.classList.add("rowTask5");
        row.onclick = () => {
    RemoveByIndex(row);
};
} else {
    alert("Сюда не вставить");
}
}
