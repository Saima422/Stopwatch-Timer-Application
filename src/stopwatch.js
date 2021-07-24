const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

const hrSpan = document.getElementById("hour");
const minSpan = document.getElementById("minute");
const secdSpan = document.getElementById("second");

let hours = 00;
let minutes = 00;
let seconds = 00;

const displayStopwatch = () => {
    document.getElementById('stopwatch').style = "display: flex;";
    document.getElementById('main-display').style = "display: none;";
}

const startStopwatch = () => {
    start.disabled = true;
    start.style = "color: F38BA0;background-color: EDF6E5;"
    pause.style = "color: EDF6E5;background-color: none;"
    reset.style = "color: EDF6E5;background-color: none;"


    window.myStopwatch= setInterval(() => {
        seconds += 01;
        if(seconds == 60){
            minutes += 01;
            seconds = 00;
        }
        if(minutes == 60){
            hours += 01;
            minutes = 00;
        }
        hrSpan.innerHTML = hours;
        minSpan.innerHTML = minutes;
        secdSpan.innerHTML = seconds;
    
    }, 1000);
}

const pauseStopwatch = () => {
    start.disabled = false;
    pause.style = "color: F38BA0;background-color: EDF6E5;"
    start.style = "color: EDF6E5;background-color: none;"
    reset.style = "color: EDF6E5;background-color: none;"
    clearInterval(window.myStopwatch);
}

const resetStopwatch = () => {
    start.disabled = false;
    reset.style = "color: F38BA0;background-color: EDF6E5;"
    pause.style = "color: EDF6E5;background-color: none;"
    start.style = "color: EDF6E5;background-color: none;"
    clearInterval(window.myStopwatch);
    hours = 00;
    minutes = 00;
    seconds = 00;
    hrSpan.innerHTML = "00";
    minSpan.innerHTML = "00";
    secdSpan.innerHTML = "00";
}

start.addEventListener('click', startStopwatch);
pause.addEventListener('click', pauseStopwatch);
reset.addEventListener('click', resetStopwatch);

