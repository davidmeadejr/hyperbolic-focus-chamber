const startStopButton = document.getElementById("startStopButton");
startStopButton.addEventListener("click", toggleButtonName);

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

function decrementingSecondsNumber() {
  let newSecsFormat = document.getElementById("secs");
  if (newSecsFormat.value < 10) {
    newSecsFormat.value = "0" + newSecsFormat.value;
  }

  return;
}

function toggleButtonName() {
  let zoneButtonName = document.getElementById("startStopButton");
  if (zoneButtonName.innerHTML === "Enter the Zone") {
    zoneButtonName.innerHTML = "Leave the Zone";
  } else {
    zoneButtonName.innerHTML = "Enter the Zone";
  }
}

let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");

let startTimer = null;

function timer() {
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.value = 0;
    seconds.value = 0;
  } else if (seconds.value != 0) {
    seconds.value--;
    decrementingSecondsNumber();
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
    decrementingMinutesNumber();
  } else if (minutes.value == 0 && seconds.value == 0) {
    stopTimer();
  }

  return;
}

function stopTimer() {
  clearInterval(startTimer);
}

startStopButton.addEventListener("click", function () {
  let zoneButtonName = document.getElementById("startStopButton");
  if (zoneButtonName.innerHTML === "Leave the Zone") {
    function startTimerCountdown() {
      startTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startTimerCountdown();
  } else {
    stopTimer();
    startTimer = setInterval(startTimer, 1000);
    minutes.value = "00";
    seconds.value = "00";
  }
});
