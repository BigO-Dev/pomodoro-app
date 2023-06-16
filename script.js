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
        countdown(5); // Short break by default
        shortBreakButton.classList.add("btn-active");
        longBreakButton.classList.remove("btn-active");
      } else {
        countdown(25); // Work session by default
        startButton.classList.add("btn-active");
        shortBreakButton.classList.remove("btn-active");
        longBreakButton.classList.remove("btn-active");
      }
    }
  }, 1000);
}

function setShortBreak() {
  clearInterval(timer);
  isBreak = true;
  countdown(5);
  shortBreakButton.classList.add("btn-active");
  longBreakButton.classList.remove("btn-active");
}

function setLongBreak() {
  clearInterval(timer);
  isBreak = true;
  countdown(10);
  shortBreakButton.classList.remove("btn-active");
  longBreakButton.classList.add("btn-active");
}

startButton.addEventListener("click", () => {
  clearInterval(timer);
  isBreak = false;
  countdown(25);
  startButton.classList.add("btn-active");
  startButton.classList.remove("btn-inactive");
  shortBreakButton.classList.remove("btn-active");
  longBreakButton.classList.remove("btn-active");
  shortBreakButton.classList.add("btn-inactive");
  longBreakButton.classList.add("btn-inactive");
});

shortBreakButton.addEventListener("click", () => {
  setShortBreak();
  startButton.classList.add("btn-inactive");
  shortBreakButton.classList.remove("btn-inactive");
  longBreakButton.classList.remove("btn-active");
  shortBreakButton.classList.add("btn-active");
  longBreakButton.classList.add("btn-inactive");
});

longBreakButton.addEventListener("click", () => {
  setLongBreak();
  startButton.classList.add("btn-inactive");
  startButton.classList.remove("btn-active");
  shortBreakButton.classList.remove("btn-active");
  longBreakButton.classList.remove("btn-inactive");
  shortBreakButton.classList.add("btn-inactive");
  longBreakButton.classList.add("btn-active");
});
