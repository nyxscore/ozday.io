const MAX_TIME = 10;

var timerMessage = "";
let timerCount;
let intervalId;

function startTimer(seconds = 10) {
  const display = document.getElementById("timerDisplay");
  const startButton = document.getElementById("startTimer");

  timerCount = seconds;

  display.classList.remove("text-danger");
  display.classList.add("text-success");
  display.textContent = `타이머: ${timerCount}초`;
  startButton.disabled = true;

  intervalId = setInterval(function () {
    timerCount--;

    if (timerCount <= 0) {
      clearInterval(intervalId);
      timerMessage = "타이머 종료!";
      display.textContent = timerMessage;

      display.classList.remove("text-success");
      display.classList.add("text-primary");

      startButton.disabled = false;
    } else {
      display.textContent = `타이머: ${timerCount}초`;
    }
  }, 1000);
}

document.getElementById("startTimer").addEventListener("click", function () {
  const input = document.getElementById("timerInput").value;
  const display = document.getElementById("timerDisplay");
  const seconds = Number(input);

  if (isNaN(seconds) || seconds < 1 || seconds > MAX_TIME) {
    display.textContent = "유효한 숫자(1-10)를 입력하세요!";
    display.classList.remove("text-success", "text-primary");
    display.classList.add("text-danger");
    return;
  }

  startTimer(seconds);
});
