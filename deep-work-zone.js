/** The id of the element for the start stop button is assigned a variable 
where a it listens for a click event to run toggle the button names. **/
const startStopButton = document.getElementById("startStopButton");
startStopButton.addEventListener("click", toggleButtonName);

/** Assigns the element id for the minutes values to a variable disable minutes. 
Where is the value of disabled minutes is equal to zero then the button is 
disabled. If not then the button can be clicked on. **/
function disableButton() {
  let disableMinutes = document.getElementById("mins");
  if (disableMinutes.value == "00") {
    document.getElementById("startStopButton").disabled = true;
  } else {
    document.getElementById("startStopButton").disabled = false;
  }
}

/** Gets the element for the minutes id and assigns it to the variable newMinsFormat. 
If the value of the minutes input is greater than  10 or less than 01 and not 
equal to zero. An additional zero is added to values from 01 - 09. **/
function decrementingMinutesNumber() {
  let newMinsFormat = document.getElementById("mins");
  if (
    newMinsFormat.value < 10 ||
    (newMinsFormat.value < 01 && newMinsFormat.value != 0)
  ) {
    newMinsFormat.value = "0" + newMinsFormat.value;
  }

  return;
}

/** Gets the element for the seconds if and assigns it to the variaboe newSecsFormat. 
If the value of the seconds input is greater than greater than 10, an additional 
zero is added to the values from 01 - 09. **/
function decrementingSecondsNumber() {
  let newSecsFormat = document.getElementById("secs");
  if (newSecsFormat.value < 10) {
    newSecsFormat.value = "0" + newSecsFormat.value;
  }

  return;
}

/** Gets the element id for the variable startStopButton and assigns it to the variable zoneButtonName. 
If the variable shows the text "Enter the Zone" and then is clicked, "Leave the Zone shows" and vice versa. **/
function toggleButtonName() { 
  let zoneButtonName = document.getElementById("startStopButton");
  if (zoneButtonName.innerHTML === "Begin 集中") {
    zoneButtonName.innerHTML = "End 残り";
  } else {
    zoneButtonName.innerHTML = "Begin 集中";
  }
}

/** Assigns the element id for the mins and secs input to variables minutes and seconds for use in functions. **/
let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");

/** Assigns null to the variable startTimer on initialisation.**/
let startTimer = null;

/** if the value of the minutes and seconds input is equal to zero then the input format becomes 00
 once the timer finishes and the button text changes back to "Enter the Zone." 
 Else if the seconds value is not equal to zero then the seonds decrements by one and, the decrementingSecondsNumber() is called. 
 Else if the minutes input value is not equal to zero and the seconds value is equal to zero. Then the seconds input value is 59 
 and the minutes input value decreases by one, and the decrementingmMinutesNumber() is called. **/
function timer() {
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.value = 0 + "0";
    seconds.value = 0 + "0";
    document.getElementById("startStopButton").innerHTML = "Begin 集中";
  } else if (seconds.value != 0) {
    seconds.value--;
    decrementingSecondsNumber();
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
    decrementingMinutesNumber();
  }

  return;
}

/** Function that when called stops the timer and changes the button text back to "Enter the Zone" **/
function stopTimer() {
  clearInterval(startTimer);
  document.getElementById("startStopButton").innerHTML = "Begin 集中";
}

/** If startStopButton has been clicked and the text shows "Leave the Zone" the timer starts. 
If not the button text is "Enter the Zone", calls the stop timer function 
and the value inputs for minutes and seconds resets to "00:00." **/
startStopButton.addEventListener("click", function () {
  let zoneButtonName = document.getElementById("startStopButton");
  if (zoneButtonName.innerHTML === "End 残り") {
    function startTimerCountdown() {
      startTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startTimerCountdown();
  } else {
    zoneButtonName.innerHTML = "Begin 集中";
    stopTimer();
    startTimer = setInterval(startTimer, 1000);
    minutes.value = "00";
    seconds.value = "00";
  }
});

/**
let input = document.getElementById("mins")
let button = document.getElementById("startStopButton")

button.disabled = true 

input.addEventListener("change", stateHandler)

function stateHandler() {
  if (document.getElementById("mins").value === "00") {
    button.disabled = true
    document.getElementById("startStopButton").innerHTML = "End 残り";
  } else {
    button.disabled = false
    document.getElementById("startStopButton").innerHTML = "Begin 集中";
  }
}
**/

let initialAudioSonud = document.getElementById("backgroundAudio");
initialAudioSonud.pause() = true;

function toggleMute() {
  let audio = document.getElementById("backgroundAudio");
  if (audio.paused === true ) {
    audio.play()
    // document.body.style.cursor = url("images/soundOn.png")
    document.body.style.cursor = 'url("images/soundOff1.png"), auto'
  } else {
    audio.pause()
    // document.body.style.cursor = url("images/soundOff1.png")
    document.body.style.cursor = 'url("images/soundOn.png"), auto';
  }

  return audio

}


