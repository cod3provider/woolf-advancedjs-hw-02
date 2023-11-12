import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  startBtn: document.querySelector('button[data-start]'),
  datePicker: document.querySelector('#datetime-picker'),
  daysSpan: document.querySelector('span[data-days]'),
  hoursSpan: document.querySelector('span[data-hours]'),
  minutesSpan: document.querySelector('span[data-minutes]'),
  secondsSpan: document.querySelector('span[data-seconds]'),
};

let startTimer = 0;
let timeLeft = 0;

// const getDateForTimer = date => new Date(date);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTimer = selectedDates[0];
    if (startTimer < Date.now()) {
      window.alert('err')
      return;
    }
    elements.startBtn.removeAttribute('disabled');
    elements.startBtn.addEventListener('click', handleClick);
  },
};

flatpickr(elements.datePicker, options);

function handleClick () {
  elements.startBtn.setAttribute('disabled', '');
  elements.datePicker.setAttribute('disabled', '');

  const timerId = setInterval(() => {
    const currentTime = Date.now();
    timeLeft = startTimer - currentTime;

    if (timeLeft <= 1000) {
      clearInterval(timerId);
      elements.datePicker.removeAttribute('disabled');
      return;
    }

    // const time = convertMs(timeLeft);
    const {days, hours, minutes, seconds} = convertMs(timeLeft);

    elements.daysSpan.textContent = days;
    elements.hoursSpan.textContent = hours;
    elements.minutesSpan.textContent = minutes;
    elements.secondsSpan.textContent = seconds;

    if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      clearInterval(timerId);
      elements.datePicker.removeAttribute('disabled');
    }
  }, 1000)
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}