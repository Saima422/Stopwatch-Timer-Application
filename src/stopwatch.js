const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

const hrSpan = document.getElementById("hour");
const minSpan = document.getElementById("minute");
const secdSpan = document.getElementById("second");

let hours = 00;
let minutes = 00;
let seconds = 00;

let isStopwatchPlay = false;

const checkIfSPlay = () => {
    if(isStopwatchPlay){
        pause.disabled = false;
        reset.disabled = false; 
        start.style.color = "grey";
        pause.style.color = "unset";
        reset.style.color = "unset";
    }
    else{
        pause.disabled = true;
        reset.disabled = true; 
        start.style.color = "unset";
        pause.style.color = "grey";
        reset.style.color = "grey";
    }
}

const displayStopwatch = () => {
    document.getElementById('stopwatch').style = "display: flex;";
    document.getElementById('main-display').style = "display: none;";
}

const startStopwatch = () => {
    start.disabled = true;
    isStopwatchPlay = true;
    checkIfSPlay();
    
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
    start.style.color = "unset";
    pause.style.color = "grey";
    clearInterval(window.myStopwatch);
}

const resetStopwatch = () => {
    start.disabled = false;
    isStopwatchPlay = false;
    checkIfSPlay();
    clearInterval(window.myStopwatch);
    hours = 00;
    minutes = 00;
    seconds = 00;
    hrSpan.innerHTML = "0";
    minSpan.innerHTML = "0";
    secdSpan.innerHTML = "0";
}

start.addEventListener('click', startStopwatch);
pause.addEventListener('click', pauseStopwatch);
reset.addEventListener('click', resetStopwatch);

const takeToHome = () =>{
    clearInterval(window.myStopwatch);
    clearInterval(window.myTimer);
    resetStopwatch();
    resetTimerFunc();

    document.getElementById('stopwatch').style = "display: none;";
    document.getElementById('main-display').style = "display: flex;";
    document.getElementById('timer').style = "display:none;"
}


