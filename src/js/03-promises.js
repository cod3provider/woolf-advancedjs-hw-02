import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay),
  );
  return promise;
}

const handleSubmit = e => {
  e.preventDefault();

  const step = Number(form.step.value);
  let delay = Number(form.delay.value);
  const amount = Number(form.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
    .then(({ position, delay }) => {
      iziToast.show({
        title: 'Fulfilled',
        titleColor: 'White',
        message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        backgroundColor: 'green',
        position: 'topRight',
      });
    })
    .catch(({ position, delay }) => {
      iziToast.show({
        title: 'Rejected',
        titleColor: 'White',
        message: `❌ Rejected promise ${position} in ${delay}ms`,
        backgroundColor: 'pink',
        position: 'topRight',
      });
    });
    delay += step;
    form.reset();
  }
};

form.addEventListener('submit', handleSubmit);