/* Global variables */
let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");
let button = document.getElementById("startStopButton");

/* Shows background video when the timer is not running. */
function playBackgroundVideo() {
  let hideBackgroundVideo = document.getElementById("backgroundVideo");
  hideBackgroundVideo.hidden = false;
}

/* Assigns null to the variable startTimer on initialisation. */
let startTimer = null;

/* Shows only the first two numbers typed in the minutes input field. */
minutes.addEventListener("input", function formatMinsInput() {
  if (minutes.value.length > minutes.maxLength) {
    minutes.value = minutes.value.slice(0, minutes.maxLength);
  }
});

/* Formats minutes input values < 10 to an "00" format. */
minutes.addEventListener("change", function formatInitMinsInput() {
  if (
    parseInt(minutes.value, 10) < 10 &&
    minutes.value.length != minutes.maxLength
  ) {
    minutes.value = "0" + minutes.value;
  }
});

/* Sets enable button state once the minutes input field has a value. */
minutes.addEventListener("keyup", function setEnableState() {
  if (minutes.value != "00" && seconds.value == "00") {
    button.disabled = false;
  }
});

/* Starts timer countdown. */
button.addEventListener("click", function runTimer() {
  if (minutes.value != 0 && seconds.value < 1) {
    startTimerCountdown();
  }
});

/* Timer countdown functionality. */
function startTimerCountdown() {
  startTimer = setInterval(function () {
    timer();
    callDecrementSecsFunc();
    callDecrementMinsFunc();
    playSaiyanAlarm();
  }, 1000);
  pauseSaiyanAlarm();
  hideBackgroundVideo();
}

/*  Calls the functions that runs the decrement minutes input field functionality */
function callDecrementMinsFunc() {
  if (minutes.value != 0 && seconds.value == 0) {
    decrementMinsValue();
    addZerotoMinsValue();
    removeZerofromMinsValue();
  }
}

/* Decrements the minutes value while the timer is running. */
function decrementMinsValue() {
  if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
  }
}

/* Seconds input field functionality while timer is running.*/
function callDecrementSecsFunc() {
  if (seconds.value != 0) {
    decrementSecsValue();
    formatSecsValue();
  }
}

/* Decrements the seconds value while the timer is running. */
function decrementSecsValue() {
  if (seconds.value != 0) {
    seconds.value--;
  }
}

/* Shows end button when timer is running.  */
button.addEventListener("click", function showEndButton() {
  if (minutes.value >= 0 || seconds.value == 0) {
    button.innerHTML = "End 残り";
  }
});

/* Hides background video when timer is running. */
function hideBackgroundVideo() {
  let hideBackgroundVideo = document.getElementById("backgroundVideo");
  hideBackgroundVideo.hidden = true;
}

/* Default timer settings after timer has been stopped. (2) */
function timer() {
  if (minutes.value == 0 && seconds.value == 0) {
    stopTimer();
    resetValues();
    resetButtonText();
    enableMinsInput();
    setDefaultButtonState();
    playBackgroundVideo();
    disableSaiyanAlert();
  }
}

/* Format the minutes input field to "00" but adding and extra "0" when in single digits.*/
function addZerotoMinsValue() {
  if (minutes.value < 10 || (minutes.value < 1 && minutes.value != 0)) {
    minutes.value = "0" + minutes.value;
  }
}

/* Keep the minutes input field to "00" but removing a "0" when in double digits.*/
function removeZerofromMinsValue() {
  if (minutes.value > 10 && seconds.value == 0) {
    minutes.value = minutes.value - "0";
  }
}

/* Ensures the seconds input value remains in the "00" format when in single digits. */
function formatSecsValue() {
  if (seconds.value < 10) {
    seconds.value = "0" + seconds.value;
  }
}

/* Plays saiyan alert once timer has stopped uninterrupted. */
function playSaiyanAlarm() {
  let superSaiyanAudio = document.getElementById("superSaiyan");
  if (minutes.value == 0 && seconds.value == 0) {
    superSaiyanAudio.play();
  }
}

/* Shows begin button when timer is not running */
button.addEventListener("click", function showBeginButton() {
  if (minutes.value == 0 && seconds.value == 0) {
    button.innerHTML = "Begin 集中";
  }
});

/* Resets value fields to a "00" format if timer count down finished uniterrupted */
function resetValues() {
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.value = "00";
    seconds.value = 0 + "0";
  }
}

/* Sets button text back to default if timer count down finished uninterrupted. */
function resetButtonText() {
  if (minutes.value == 0 && seconds.value == 0) {
    button.innerHTML = "Begin 集中";
  }
}

/* Resets button to the default state once the timer ends. */
function setDefaultButtonState() {
  if (minutes.value == 0 && seconds.value == 0) {
    button.disabled = true;
  }
}

/* Removes the disable input field functionality once the timer has stopped. */
function enableMinsInput() {
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.disabled = false;
  }
}

/* Pauses the saiyan alert once timer restarts. */
function pauseSaiyanAlarm() {
  let superSaiyanAudio = document.getElementById("superSaiyan");
  if (minutes.value != 0 && seconds.value == 0) {
    superSaiyanAudio.pause();
  }
}

/* Stop timer functionality. */
function stopTimer() {
  clearTimeout(startTimer);
}

/* Resets minutes and seconds value fields to a "00" format if timer was stopped early. */
button.addEventListener("click", function resetTimerValues() {
  if (minutes.value >= 0 && seconds.value > 1) {
    minutes.value = "00";
    seconds.value = "00";
  }
});

/* Disable button functionality if timer was stopped early. */
button.addEventListener("click", function disableButton() {
  if (minutes.value != 0 && seconds.value < 1) {
    minutes.disabled = true;
  }
});

/* Enable button functionality if timer was stopped early. */
button.addEventListener("click", function disableButton() {
  if (minutes.value != 0 && seconds.value < 1) {
    minutes.disabled = false;
  }
});
