const timerElement = document.getElementById("timer");
const modeElement = document.querySelector(".mode");
const startButton = document.getElementById("start");
const shortBreakButton = document.getElementById("short-break");
const longBreakButton = document.getElementById("long-break");

let timer;
let isBreak = false;

function countdown(minutes) {
  let seconds = minutes * 60;
  timer = setInterval(function () {
    const minutesDisplay = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secondsDisplay = (seconds % 60).toString().padStart(2, "0");
    timerElement.textContent = `${minutesDisplay}:${secondsDisplay}`;
    modeElement.textContent = isBreak ? "Break" : "Work";
    if (--seconds < 0) {
      clearInterval(timer);
      isBreak = !isBreak;
      console.log(`Countdown ${isBreak ? "complete!" : "started!"}`);
      if (isBreak) {
        // If break ended, start work countdown
        countdown(25);
      }
    }
  }, 1000);
}

function setShortBreak() {
  clearInterval(timer);
  isBreak = true;
  countdown(5);
}

function setLongBreak() {
  clearInterval(timer);
  isBreak = true;
  countdown(10);
}

startButton.addEventListener("click", () => {
  clearInterval(timer);
  isBreak = false;
  countdown(25);
});

shortBreakButton.addEventListener("click", () => {
  setShortBreak();
});

longBreakButton.addEventListener("click", () => {
  setLongBreak();
});
