var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;


function timerFunction() {
    var display = document.getElementById("timeDisplay");

    milliseconds = (milliseconds + 1) % 100;
    if(milliseconds === 0) {
        seconds = (seconds + 1) % 60;
        if(seconds === 0) {
            minutes = (minutes + 1) % 60
            if(minutes === 0) {
                hours++;
            }
        }
    }
    if (milliseconds < 10 && milliseconds.toString().length === 1) {milliseconds = "0" + milliseconds}
    if (seconds.toString().length === 1) {
        alert(seconds.toString().length);
        seconds = "0" + seconds
    }

    display.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

function startTimer() {
    var display = document.getElementById("timeDisplay");

    try {
        clearInterval(timer);
    } catch (error) {}

    timer = setInterval(timerFunction, 10);
}

function resetTimer() {
    var display = document.getElementById("timeDisplay");
    display.innerHTML = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
}