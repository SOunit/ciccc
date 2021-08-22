console.log('hello from js');

const target1 = document.querySelector('.js-slide-override-active-1');
const target2 = document.querySelector('.js-slide-override-active-2');
const target3 = document.querySelector('.js-slide-override-active-3');

const wait = 0;

setTimeout(() => {
  console.log('1000');
  target1.classList.add('slide__override-top--active');
}, 1000 + wait * 1000);
setTimeout(() => {
  console.log('2000');
  target2.classList.add('slide__override-middle--active');
}, 2000 + wait * 1000);
setTimeout(() => {
  console.log('3000');
  target3.classList.add('slide__override-bottom--active');
}, 3000 + wait * 1000);
