var hour = 0;
var minutes = 0;
var sec = 0;
var playButton = document.getElementById('button-play');
var timerRunning = false;
var timerInterval;

function timerStart() {
    sec = parseInt(document.getElementById('sec').value) || 0;
    minutes = parseInt(document.getElementById('minutes').value) || 0;
    hour = parseInt(document.getElementById('hour').value) || 0;

    if (timerRunning) {
        if (sec > 0) {
            sec--;
        } else {
            if (minutes > 0) {
                minutes--;
                sec = 59;
            } else if (hour > 0) {
                hour--;
                minutes = 59;
                sec = 59;
            }
        }
        if (hour == 0 && minutes == 0 && sec == 0) {
            pausar();
        }

        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('hour').value = hour > 0 ? hour : '';
    document.getElementById('minutes').value = minutes > 0 || hour > 0 ? minutes : '';
    document.getElementById('sec').value = sec;
}

function play() {
    if (timerRunning == false) {
        timerRunning = true;
        timerInterval = setInterval(timerStart, 1000);
        timerStart();
    }
}

function pausar() {
    if (timerRunning) {
        timerRunning = false;
        clearInterval(timerInterval);
    }
}

function resetar(){
        document.getElementById('hour').value = ""
        document.getElementById('minutes').value = ""
        document.getElementById('sec').value = ""
        timerRunning = false
        clearInterval(timerInterval)
}
