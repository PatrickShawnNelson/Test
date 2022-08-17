//Count Button
let count = document.getElementById("count");
//Stop/Reset Button
let stopCount = document.getElementById("stop-count");
//Lap Button
let lap = document.getElementById("lap");
//LapStatement Div
let lapS = document.getElementById("lapStatement");
let br = document.createElement("div");

//For consecutive mouse clicks on Stop/Reset
var stopCountY = 0;

let m;
let ms;
let s;

//Assigns count functionality, mainTime method will be called every 10 counts.
count.addEventListener('click', ()=>{
    int = setInterval(mainTime,10);});

//Calls the stopCounter function to pause the count.    
stopCount.addEventListener('click', stopCounter);

//Calls lap function
lap.addEventListener('click', newLap);

//Stops the interval at the current count, does not clear the values
function stopCounter(){
    //However if the button was hit a second time it will clear them
    if (stopCountY == 1){

        //Sets minutes to 0
        document.getElementById("mainminute").innerHTML = "00";
        //Set seconds to 0
        document.getElementById("mainsecond").innerHTML = "00";
        //Sets milliseconds to 0
        document.getElementById("milliseconds").innerHTML = "00";

        //Resets the timer count
        milliseconds = 0;
        second = 0;
        minute = 0;

        //Wipes the lap statements
        lapS.innerHTML = "";

        stopCountY = 0;
    }
    //Pause the timer, register the fact that the first function of this method has been activated.
    else {
        clearInterval(int);
        stopCountY = 1;
    }
    
}

//--------------------------------
//         Lap Function
//--------------------------------
function newLap(){
    lapS.append(` ${m} : ${s} : ${ms}`);
    lapS.append(br);
}

let [milliseconds,second,minute,] = [0,0,0];
//Assigns the 
let timerRef = document.querySelector('.mainTime');
let int = null;
//--------------------------------
//      Counter Function
//--------------------------------
function mainTime(){
    //Allows for seamless interaction between Stop, Start, and Reset
    stopCountY = 0;

    //Incrementing the timer
    milliseconds+=10;

    if(milliseconds == 1000){
    milliseconds = 0;
    second++;

    if(second == 60){
    second = 0;
    minute++;

    //if(minute == 60){
    //minute = 0;
    //}
    }
}
    else {
    m = minute < 10 ? "0" + minute : minute;
    s = second < 10 ? "0" + second : second;
    ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    }
//ms.appendChild(document.getElementById("milliseconds"))
//timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;

//Increments the main minute element based on m
document.getElementById("mainminute").innerHTML = m;
//Increments the main second element based on s
document.getElementById("mainsecond").innerHTML = s;
//Increments the main milisecond element based on ms
document.getElementById("milliseconds").innerHTML = ms;
}