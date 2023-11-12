const form = document.querySelector('.form');
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay)
  );
  return promise;
}

const handleSubmit = e => {
  e.preventDefault();

  const step = Number(form.step.value);
  let delay = Number(form.delay.value);
  const amount = Number(form.amount.value);

  console.log(step, delay, amount);

  for(let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
    .then(({position, delay}) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;
  form.reset();
  }
}

form.addEventListener('submit' , handleSubmit);