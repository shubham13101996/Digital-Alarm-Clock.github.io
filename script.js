const display = document.getElementById("alarm_clock_time");


function setTime(){

    var time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    display.innerText=`${hour}:${minutes}:${seconds}`;
}

setInterval(setTime, 1000);