var timerInterval;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  var hoursString = hours < 10 ? "0" + hours : hours;
  var minutesString = minutes < 10 ? "0" + minutes : minutes;
  var secondsString = seconds < 10 ? "0" + seconds : seconds;
  var timerDisplay = document.getElementById("timer-display");
  timerDisplay.textContent = hoursString + ":" + minutesString + ":" + secondsString;
}
