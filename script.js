// let timer = document.getElementById("timer");
// var hr = 0;
// var min = 0;
// var sec = 0;

// var stopTime = true;

// function startTimer(){
//     if(stopTime == true) stopTime = false;

//     timerCycle();
// }

// function stopTimer(){
//     if(stopTime == false) stopTime = true;

//     timerCycle();
// }

// function timerCycle(){
//     if(stopTime == false){
//         sec = parseInt(sec);
//         min = parseInt(min);
//         hr = parseInt(hr);

//         sec = sec+1 ;
//         if(sec == 60){
//             min = min+1 ; 
//             sec = 0;
//         }
//         if(min == 60){
//             hr = hr+1 ; 
//             min = 0;
//             sec = 0;
//         }

//         if(sec < 10) sec = "0"+ sec ;
//         if(min < 10) sec = "0"+ min ;
//         if(hr < 10) sec = "0"+ hr ;

 
//         timer.innerHTML = hr + ":" + min + ":" + sec

//         setTimeout(timerCycle() , 1000);
//     }
// }
// function resetTimer(){
//     timer.innerHTML = "00:00:00" ;
//     stopTime = true ;
//     hr = 0; 
//     sec = 0;
//     min = 0;
// }


let timer = document.getElementById("timer");
timer.style.fontSize = "100px";
timer.style.boxShadow = "0 0 10px lightgreen"
timer.style.padding = "1rem 2rem"
timer.style.margin = "1rem"

var hr = 0;
var min = 0;
var sec = 0;

var stopTime = true;
var timerInterval; // Added to store the interval ID

function startTimer(){
    if(stopTime == true) {
        stopTime = false;
        timerInterval = setInterval(timerCycle, 1000); // Use setInterval to call timerCycle every second
    }
}

function stopTimer(){
    if(stopTime == false) {
        stopTime = true;
        clearInterval(timerInterval); // Use clearInterval to stop the interval
    }
}

function timerCycle(){
    if(stopTime == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1 ;
        if(sec == 60){
            min = min + 1 ; 
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1 ; 
            min = 0;
            sec = 0;
        }

        // Corrected variable names here
        if(sec < 10) sec = "0" + sec ;
        if(min < 10) min = "0" + min ;
        if(hr < 10) hr = "0" + hr ;

        timer.innerHTML = hr + ":" + min + ":" + sec;
    }
}

function resetTimer(){
    timer.innerHTML = "00:00:00" ;
    stopTime = true ;
    hr = 0; 
    sec = 0;
    min = 0;
    clearInterval(timerInterval); // Added to stop the interval on reset
}
