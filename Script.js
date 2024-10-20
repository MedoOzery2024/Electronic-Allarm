// Digital Clock
function updateDigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // إذا كانت الساعة صفر تعيين 12
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    document.getElementById('digital-clock').innerText = formattedTime;
}
setInterval(updateDigitalClock, 1000);

// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;

document.getElementById('start-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        displayStopwatchTime();
    }, 1000);
});

document.getElementById('stop-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
});

document.getElementById('reset-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    displayStopwatchTime();
});

function displayStopwatchTime() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById('stopwatch').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Timer
let timerInterval;
let timerSeconds = 0;

document.getElementById('start-timer').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    timerSeconds = hours * 3600 + minutes * 60 + seconds;
    displayTimerTime();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            displayTimerTime();
        } else {
            clearInterval(timerInterval);
            alert("الوقت انتهى!");
        }
    }, 1000);
});

document.getElementById('stop-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerSeconds = 0;
    displayTimerTime();
});

function displayTimerTime() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timer').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
