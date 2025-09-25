function updateClock() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const ampmElement = document.getElementById("ampm");

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    // Update the text
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
    ampmElement.textContent = ampm;

    // Animate the circles
    document.getElementById("hours-circle").style.setProperty("--rotation", (hours / 12) * 360);
    document.getElementById("minutes-circle").style.setProperty("--rotation", (minutes / 60) * 360);
    document.getElementById("seconds-circle").style.setProperty("--rotation", (seconds / 60) * 360);
}

setInterval(updateClock, 1000);
updateClock();