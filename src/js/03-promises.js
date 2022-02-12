import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      }
      rej({ position, delay });
    }, delay);
  });
}

function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  let finalDelay;

  for (let promise = 1; promise <= Number(amount.value); promise += 1) {
    if (promise === 1) {
      finalDelay = Number(delay.value);
    } else {
      finalDelay += Number(step.value);
    }

    createPromise(promise, finalDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

formRef.addEventListener('submit', onSubmit);
