var date = document.getElementsByClassName("date")
var time = document.getElementsByClassName("time")




function GetTime() {
    var now = new Date()

    var hours = now.getHours() % 12
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    var day
    if (now.getHours() > 12)
    {
        day = "PM"
    }
    else
    {
        day = "AM"
    }

    time.item(0).textContent = hours + ":" + minutes + ":" + seconds + "-" + day
}

function GetDate() {
    var now = new Date()

    var weekDay = now.toLocaleDateString("ru-RU", {weekday: "long"})
    var month = now.toLocaleDateString("ru-RU", {month: "long"})
    var day
    if (now.getDay() < 10)
    {
        day = "0" + now.getDay()
    }
    else
    {
        day = now.getDay()
    }
    var year = now.getFullYear()

    date.item(0).textContent =weekDay + ", " + day + " " + month + " " + year
}

setInterval(GetTime, 1000)
setInterval(GetDate, 1000)