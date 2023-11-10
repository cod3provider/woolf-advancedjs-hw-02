import getRandomHexColor from './getRandomHexColor.js';

const elements = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyStyle: document.body.style,
}

let timerId = null;

const handleStart = () => {
  timerId = setInterval(() => elements.bodyStyle.backgroundColor = getRandomHexColor(), 1000);

  if (timerId) {
    elements.startBtn.setAttribute('disabled', '');
  }
}

const handleStop = () => {
  clearInterval(timerId);
  elements.startBtn.removeAttribute('disabled');
}

elements.startBtn.addEventListener('click', handleStart);
elements.stopBtn.addEventListener('click', handleStop);