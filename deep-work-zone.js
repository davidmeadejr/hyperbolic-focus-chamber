/** The id of the element for the start stop button is assigned a variable 
where a it listens for a click event to run toggle the button names. **/
let startStopButton = document.getElementById("startStopButton");
startStopButton.addEventListener("click", toggleButtonName);

/** Assigns the element id for the minutes values to a variable disable minutes. 
Where is the value of disabled minutes is equal to zero then the button is 
disabled. If not then the button can be clicked on. **/
function disableButton() {
  let disableMinutes = document.getElementById("mins");
  let disableSeconds = document.getElementById("secs");
  if (disableMinutes.value == 00 && disableSeconds.value == 00) {
    document.getElementById("startStopButton").disabled = true;
    document.getElementById("startStopButton").style.color = "#d3d3d3";
  } else {
    document.getElementById("startStopButton").disabled = false;
    document.getElementById("startStopButton").style.color = "#fff";
  }
}

/** Gets the element for the minutes id and assigns it to the variable newMinsFormat. 
If the value of the minutes input is greater than  10 or less than 01 and not 
equal to zero. An additional zero is added to values from 01 - 09. **/
function decrementingMinutesNumber() {
  let newMinsFormat = document.getElementById("mins");
  let newSecondsFormat = document.getElementById("secs");
  if (
    newMinsFormat.value < 10 ||
    (newMinsFormat.value < 01 && newMinsFormat.value != 00)
  ) {
    newMinsFormat.value = "0" + newMinsFormat.value;
  } else if (newMinsFormat.value < 10 && newSecondsFormat.value == "00") {
    newMinsFormat.value = newMinsFormat.value - "0";
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
  let disableMinutes = document.getElementById("mins");
  if (zoneButtonName.innerHTML === "Begin 集中" && disableMinutes.value >= 01) {
    zoneButtonName.innerHTML = "End 残り";
    document.getElementById("startStopButton").style.color = "#fff";
  } else {
    zoneButtonName.innerHTML = "Begin 集中";
    document.getElementById("startStopButton").style.color = "#d3d3d3";
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
  let superSaiyanAudio = document.getElementById("superSaiyan");
  let startStopButton = document.getElementById("startStopButton");
  let hideAnimeVideo = document.getElementById("backgroundVideo");
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.value = 0;
    seconds.value = 0 + "0";
    document.getElementById("startStopButton").innerHTML = "Begin 集中";
    document.getElementById("startStopButton").style.color = "#d3d3d3";
    superSaiyanAudio.play();
    superSaiyanAudio.currentTime = 0;
    stopTimer();
    hideAnimeVideo.hidden = false;
    minutes.disabled = false;
  } else if (seconds.value != 0) {
    seconds.value--;
    decrementingSecondsNumber();
  } else if (
    minutes.value != 0 &&
    seconds.value == 0 &&
    startStopButton.innerHTML == "End 残り"
  ) {
    seconds.value = 59;
    minutes.value--;
    decrementingMinutesNumber();
    superSaiyanAudio.pause();
  }
  return;
}

/** Function that when called stops the timer and changes the button text back to "Enter the Zone" **/
function stopTimer() {
  clearTimeout(startTimer);
}

/** If startStopButton has been clicked and the text shows "Leave the Zone" the timer starts. 
If not the button text is "Enter the Zone", calls the stop timer function 
and the value inputs for minutes and seconds resets to "00:00." **/
startStopButton.addEventListener("click", function () {
  let zoneButtonName = document.getElementById("startStopButton");
  let hideAnimeVideo = document.getElementById("backgroundVideo");
  let minutes = document.getElementById("mins");
  if (minutes.value != 0 && seconds.value < 1) {
    function startTimerCountdown() {
      startTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startTimerCountdown();
    zoneButtonName.innerHTML = "End 残り";
    document.getElementById("startStopButton").style.color = "#fff";
    minutes.disabled = true;
    hideAnimeVideo.hidden = true;
  } else {
    stopTimer();
    zoneButtonName.innerHTML = "Begin 集中";
    minutes.value = "00";
    seconds.value = "00";
    minutes.disabled = false;
    hideAnimeVideo.hidden = false;
  }
});

function toggleMute() {
  let audio = document.getElementById("backgroundAudio");
  if (audio.paused === true) {
    audio.play();
    document.body.style.cursor = 'url("images/soundOff1.png"), auto';
  } else {
    audio.pause();
    document.body.style.cursor = 'url("images/soundOn.png"), auto';
  }

  return audio;
}
