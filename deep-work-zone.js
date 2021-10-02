document
  .getElementById("startStopButton")
  .addEventListener("click", toggleButtonName);

function toggleButtonName() {
  let zoneButtonName = document.getElementById("startStopButton");
  if (zoneButtonName.innerHTML === "Enter the Zone") {
    zoneButtonName.innerHTML = "Leave the Zone";
  } else {
    zoneButtonName.innerHTML = "Enter the Zone";
  }
}

document.getElementById("countdown").addEventListener("click", inputTime);
