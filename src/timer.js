const timerStart = document.getElementById("timer-start");
const timerPause = document.getElementById("timer-pause");
const timerReset = document.getElementById("timer-reset");

const hrSpanTimer = document.getElementById("timer-hour");
const minSpanTimer = document.getElementById("timer-minute");
const secdSpanTimer = document.getElementById("timer-second");

const hrInput = document.getElementById("timer-hrs");
const minInput = document.getElementById("timer-mins");
const secdInput = document.getElementById("timer-secs");

let timerHours = 00;
let timerMinutes = 00;
let timerSeconds = 00;

const displayTimer = () => {
    document.getElementById('timer').style = "display: flex;";
    document.getElementById('main-display').style = "display: none;";
}


const startTimerFunc = () => {
    timerHours = hrInput.value;
    timerMinutes = minInput.value;
    timerSeconds = secdInput.value;
    
    if(timerSeconds == "" && timerMinutes == "" && timerHours == ""){
        alert('Enter a value for Timer to Start');
    }  
    else{
        timerStart.disabled = true;
        timerStart.style = "color: F38BA0;background-color: EDF6E5;";
        timerPause.style = "color: EDF6E5;background-color: none;";
        timerReset.style = "color: EDF6E5;background-color: none;";

        window.myTimer= setInterval(() => {
        if(timerSeconds != 0){
            timerSeconds -= 1;
        }
        if(timerSeconds == 0 && timerMinutes != 0){
            timerMinutes -= 1;
            timerSeconds = 59;
        }
        if(timerSeconds == 0 && timerMinutes == 0 && timerHours != 0){
            timerHours -=1;
            timerMinutes = 59;
            timerSeconds = 59;
        }
        if(timerSeconds == 0 && timerMinutes == 0 && timerHours == 0){
            // secdSpanTimer.innerHTML = timerSeconds;
            alert("Timer Completed!");
            clearInterval(window.myTimer);
            timerStart.disabled = false;
        }

        hrSpanTimer.innerHTML = timerHours;
        minSpanTimer.innerHTML = timerMinutes;
        secdSpanTimer.innerHTML = timerSeconds;
    
        }, 1000);
    } 
}

const pauseTimerFunc = () => {
    timerStart.disabled = false;
    timerPause.style = "color: F38BA0;background-color: EDF6E5;";
    timerStart.style = "color: EDF6E5;background-color: none;";
    timerReset.style = "color: EDF6E5;background-color: none;";
    clearInterval(window.myTimer);
}

const resetTimerFunc = () => {
    timerStart.disabled = false;
    timerReset.style = "color: F38BA0;background-color: EDF6E5;";
    timerPause.style = "color: EDF6E5;background-color: none;";
    timerStart.style = "color: EDF6E5;background-color: none;";
    clearInterval(window.myTimer);
    timerHours = 00;
    timerMinutes = 00;
    timerSeconds = 00;
    hrSpanTimer.innerHTML = "00";
    minSpanTimer.innerHTML = "00";
    secdSpanTimer.innerHTML = "00";

    hrInput.value = "";
    minInput.value = "";
    secdInput.value = ""; 
}

timerStart.addEventListener('click', startTimerFunc);
timerPause.addEventListener('click', pauseTimerFunc);
timerReset.addEventListener('click', resetTimerFunc);


