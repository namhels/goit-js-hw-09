const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');

let intervalId = null;
btnStopRef.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getDisabledBtn(buttonA, buttonB) {
  buttonA.disabled = true;
  buttonB.disabled = false;
}

const onStartClick = () => {
  getDisabledBtn(btnStartRef, btnStopRef);
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const onStopClick = () => {
  getDisabledBtn(btnStopRef, btnStartRef);
  clearInterval(intervalId);
};

btnStartRef.addEventListener('click', onStartClick);
btnStopRef.addEventListener('click', onStopClick);
