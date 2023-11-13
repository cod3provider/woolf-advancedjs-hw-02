import getRandomHexColor from './getRandomHexColor.js';

const elements = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyStyle: document.body.style,
}
elements.stopBtn.setAttribute('disabled', '');

let timerId = null;

const handleStart = () => {
  timerId = setInterval(() => elements.bodyStyle.backgroundColor = getRandomHexColor(), 1000);

  if (timerId) {
    elements.startBtn.setAttribute('disabled', '');
    elements.stopBtn.removeAttribute('disabled');
  }
}

const handleStop = () => {
  clearInterval(timerId);
  elements.startBtn.removeAttribute('disabled');
  elements.stopBtn.setAttribute('disabled', '');
}

elements.startBtn.addEventListener('click', handleStart);
elements.stopBtn.addEventListener('click', handleStop);