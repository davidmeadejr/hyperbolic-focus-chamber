// Global variables
let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");
let button = document.getElementById("startStopButton");

// Shows background video when timer has been stopped.
function playBackgroundVideo() {
  let hideBackgroundVideo = document.getElementById("backgroundVideo");
  hideBackgroundVideo.hidden = false;
}

// Hides background video when timer is running.
function hideBackgroundVideo() {
  let hideBackgroundVideo = document.getElementById("backgroundVideo");
  hideBackgroundVideo.hidden = true;
}

// Assigns null to the variable startTimer on initialisation.
let startTimer = null;

// Default timer settings.
function timer() {
  if (minutes.value == 0 && seconds.value == 0) {
    stopTimer();
    resetValues();
    resetButtontext();
    playSaiyanAlarm();
    enableMinsInput();
    setDefaultButtonState();
    playBackgroundVideo();
  } else if (seconds.value != 0) {
    decrementSecsValue();
  } else if (minutes.value != 0 && seconds.value == 0) {
    pauseSaiyanAlarm();
    decrementMinsValue();
    hideBackgroundVideo();
  }
  return;
}

// Resets value fields to a "00" format if timer count down finished uniterrupted
function resetValues() {
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.value = "00";
    seconds.value = 0 + "0";
  }
}

// Sets button text back to default if timer count down finished uninterrupted.
function resetButtontext() {
  if (minutes.value == 0 && seconds.value == 0) {
    button.innerHTML = "Begin 集中";
  }
}

// Decrements the seconds value while the timer is running.
function decrementSecsValue() {
  if (seconds.value != 0) {
    seconds.value--;
  }
}

// Decrements the seconds value while the timer is running.
function decrementMinsValue() {
  if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
  }
}

// Plays saiyan alert once timer has stopped.
function playSaiyanAlarm() {
  let superSaiyanAudio = document.getElementById("superSaiyan");
  if (minutes.value == 0 && seconds.value == 0) {
    superSaiyanAudio.play();
    superSaiyanAudio.currentTime = 0;
  }
}

// Pauses the saiyan alert once timer restarts.
function pauseSaiyanAlarm() {
  let superSaiyanAudio = document.getElementById("superSaiyan");
  if (minutes.value != 0 && seconds.value == 0) {
    superSaiyanAudio.pause();
  }
}

// Removes the disable input field functionality once the timer has stopped.
function enableMinsInput() {
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.disabled = false;
  }
}

// Resets button to the default state once the timer ends.
function setDefaultButtonState() {
  if (minutes.value == 0 && seconds.value == 0) {
    button.disabled = true;
  }
}

// Stop timer functionality.
function stopTimer() {
  clearTimeout(startTimer);
}

// Start timer functionality.
startStopButton.addEventListener("click", function () {
  if (minutes.value != 0 && seconds.value < 1) {
    function startTimerCountdown() {
      startTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startTimerCountdown();
  }
});

// Toggle button text name if timer was stopped early.
startStopButton.addEventListener("click", function toggleBText() {
  if (minutes.value != 0 && seconds.value < 1) {
    button.innerHTML = "End 残り";
  } else {
    button.innerHTML = "Begin 集中";
  }
});

// Toggle disable/enable button functionality if timer was stopped early.
startStopButton.addEventListener("click", function disableButton() {
  if (minutes.value != 0 && seconds.value < 1) {
    minutes.disabled = true;
  } else {
    minutes.disabled = false;
  }
});

// Resets value fields to a "00" format if timer was stopped early.
startStopButton.addEventListener("click", function resetTimerValues() {
  if (minutes.value >= 0 && seconds.value > 1) {
    minutes.value = "00";
    seconds.value = "00";
  }
});

// Stop timer when button is clicked after timer has been running initially.
startStopButton.addEventListener("click", function stopTimer() {
  if (minutes.value != 0 && seconds.value > 1) {
    stopTimer();
  }
});

// Sets enable button state once the minutes input field has a value.
minutes.addEventListener("keyup", function setEnableState() {
  if (minutes.value != "00" && seconds.value == "00") {
    button.disabled = false;
  }
});
