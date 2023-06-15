const timerElement = document.getElementById("timer");
const modeElement = document.querySelector(".mode");
const startButton = document.getElementById("start");

function countdown(minutes) {
  let seconds = minutes * 60;
  const timer = setInterval(function () {
    const minutesDisplay = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secondsDisplay = (seconds % 60).toString().padStart(2, "0");
    // console.log(`${minutesDisplay}:${secondsDisplay}`);
    timerElement.textContent = `${minutesDisplay}:${secondsDisplay}`;
    modeElement.textContent = "Work";
    if (--seconds < 0) {
      clearInterval(timer);
      console.log("Countdown complete!");
    }
  }, 1000);
}

startButton.addEventListener("click", () => {
  countdown(25);
});

// window.onload = function () {
//   countdown(25);
// };
