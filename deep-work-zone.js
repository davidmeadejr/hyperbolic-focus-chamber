function startStopButton() {
    let name = document.getElementById("startStopButton");
    if (name.innerHTML === "Get in the Zone") {
        name.innerHTML = "Get out the Zone";
    } else {
        name.innerHTML = "Get in the Zone";
    }
}
