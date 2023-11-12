import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';


const elements = {
  startBtn: document.querySelector('button[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const datePicker = flatpickr(elements.input, options);

const handleClick = () => {

}

elements.startBtn.addEventListener('click', handleClick);