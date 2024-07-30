let timerInterval;
let countdownTime = 0; // Countdown time in seconds

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");
const setCountdownButton = document.getElementById("set-countdown-btn");
const countdownTimeInput = document.getElementById("countdown-time-input");

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(secs).padStart(2, "0")}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(countdownTime);
}

function calculateTimeDifference(selectedDateTime) {
  const now = new Date();
  const targetDateTime = new Date(selectedDateTime);
  const timeDiff = Math.max(0, Math.floor((targetDateTime - now) / 1000)); // Time in seconds
  return timeDiff;
}

function setCountdown() {
  const input = countdownTimeInput.value;
  if (input) {
    countdownTime = calculateTimeDifference(input);
    if (countdownTime > 0) {
      updateDisplay();
    } else {
      alert("The selected date and time must be in the future.");
    }
  } else {
    alert("Please select a date and time.");
  }
}

function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals
  timerInterval = setInterval(() => {
    if (countdownTime > 0) {
      countdownTime--;
      updateDisplay();
    } else {
      stopTimer();
      alert("Time is up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  countdownTime = 0;
  updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
setCountdownButton.addEventListener("click", setCountdown);

updateDisplay(); // Initialize display
