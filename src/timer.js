const timerStart = document.getElementById("timer-start");
const timerPause = document.getElementById("timer-pause");
const timerReset = document.getElementById("timer-reset");
// const timerCancel = document.getElementById("timer-cancel");

const hrSpanTimer = document.getElementById("timer-hour");
const minSpanTimer = document.getElementById("timer-minute");
const secdSpanTimer = document.getElementById("timer-second");

const hrInput = document.getElementById("timer-hrs");
const minInput = document.getElementById("timer-mins");
const secdInput = document.getElementById("timer-secs");

let timerHours = 00;
let timerMinutes = 00;
let timerSeconds = 00;

// const inputDiv =`<div class="timer-input">
//                     <input type="number" placeholder="H" id="timer-hrs"><p>:</p>
//                     <input type="number" placeholder="M" id="timer-mins"><p>:</p>
//                     <input type="number" placeholder="S" id="timer-secs">
//                 </div>`;

// const timerDiv = `<div class="display-timer">
//                     <span id="timer-hour">00</span><p>:</p>
//                     <span id="timer-minute">00</span><p>:</p>
//                     <span id="timer-second">00</span>
//                   </div>`;

// displayDiv(inputDiv);

const displayTimer = () => {
    document.getElementById('timer').style = "display: flex;";
    document.getElementById('main-display').style = "display: none;";
}


const startTimerFunc = () => {
    timerHours = hrInput.value;
    timerMinutes = minInput.value;
    timerSeconds = secdInput.value;

    // displayDiv(timerDiv);

    
    if(timerSeconds == "" && timerMinutes == "" && timerHours == ""){
        alert('Enter a value for Timer to Start');
    }  
    else{
        timerStart.disabled = true;
        timerStart.style.color = "#FFBCBC";

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

        // console.log(hours, minutes, seconds);
        hrSpanTimer.innerHTML = timerHours;
        minSpanTimer.innerHTML = timerMinutes;
        secdSpanTimer.innerHTML = timerSeconds;
    
        }, 1000);
    } 
}

const pauseTimerFunc = () => {
    timerStart.disabled = false;
    clearInterval(window.myTimer);
}

const resetTimerFunc = () => {
    timerStart.disabled = false;
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

// const cancelTimerFunc = () => {}

timerStart.addEventListener('click', startTimerFunc);
timerPause.addEventListener('click', pauseTimerFunc);
timerReset.addEventListener('click', resetTimerFunc);
// timerCancel.addEventListener('click', cancelTimerFunc);

// const displayDiv = (divContent) => {
//     console.log(divContent);
//     document.getElementById('timer-div').innerHTML = divContent;
    
// }
