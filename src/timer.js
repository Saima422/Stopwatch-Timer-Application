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

let count = 0;

const startTimerFunc = () => {

    if(count == 0){
        timerHours = hrInput.value;
        timerMinutes = minInput.value;
        timerSeconds = secdInput.value;
        count += 1;
    }

    if(timerSeconds == "" && timerMinutes == "" && timerHours == ""){
        alert('Enter a value for Timer to Start');
        resetTimerFunc();
    } 
    else if(parseInt(timerSeconds) < 0 || parseInt(timerMinutes) < 0 || parseInt(timerHours) < 0){
        alert('Value for Timer cannot be negative');
        resetTimerFunc();
    }  
    else if(timerSeconds >= 60){
        alert("Seconds cannot be greater than 60");
        resetTimerFunc();
    }
    else if(timerMinutes >= 60){
        alert("Minutes cannot be greater than 60");
        resetTimerFunc();
    }
    else if(timerHours >= 24){
        alert("Hours cannot be greater than 24");
        resetTimerFunc();
    }
    else{
        if(timerHours == ""){
            timerHours = "00";
        }
        if(timerMinutes == ""){
            timerMinutes = "00";
        }

        timerStart.disabled = true;
        hrInput.disabled = true;
        secdInput.disabled = true;
        minInput.disabled = true;
        timerStart.style = "color: F38BA0;background-color: EDF6E5;";
        timerPause.style = "color: EDF6E5;background-color: none;";
        timerReset.style = "color: EDF6E5;background-color: none;";

        window.myTimer= setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds -=1;
                if(timerSeconds <= 9){
                    timerSeconds = "0" + timerSeconds;
                }
            }
            else {
                if (timerMinutes > 0) {
                    timerMinutes--;
                    timerSeconds = 59;
                    if(timerMinutes <= 9){
                        timerMinutes = "0" + timerMinutes;
                    }
                }
                else {
                    timerMinutes = 59;
                    timerSeconds = 59;
                    timerHours -=1;
                    if(timerHours <= 9){
                        timerHours = "0" + timerHours;
                    }
                }
            }
    
            if(timerSeconds != 0 || timerMinutes != 0 || timerHours != 0){
        
                if(timerHours <= 9 && timerHours.length <2){
                    timerHours = "0" + timerHours;
                }
                if(timerMinutes <= 9 && timerMinutes.length <2){
                    timerMinutes = "0" + timerMinutes;
                }
                if(timerSeconds <= 9 && timerSeconds.length <2){
                    timerSeconds = "0" + timerSeconds;
                }
            }
            
            if(timerSeconds == 0 && timerMinutes == 0 && timerHours == 0){
                alert("Timer Completed!");
                resetTimerFunc();
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
    count = 0;
    enableFunction();
    timerReset.style = "color: F38BA0;background-color: EDF6E5;";
    timerPause.style = "color: EDF6E5;background-color: none;";
    timerStart.style = "color: EDF6E5;background-color: none;";
    clearInterval(window.myTimer);

    timerHours = "00";
    timerMinutes = "00";
    timerSeconds = "00";
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

const enableFunction = () => {
    timerStart.disabled = false;
    hrInput.disabled = false;
    secdInput.disabled = false;
    minInput.disabled = false;
}


