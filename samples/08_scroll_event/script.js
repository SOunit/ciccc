console.log('hello from js');

const headerTag = document.querySelector('.header');
const headerTagHeight = headerTag.clientHeight;

const mainTag = document.querySelector('.main');
const styles = window.getComputedStyle(mainTag);
const { paddingTop } = styles;
const paddingTopNum = parseInt(paddingTop.split('px')[0]);
console.log(paddingTopNum);

const rem = 16;
window.addEventListener('scroll', () => {
  let scrollFromTop = window.pageYOffset;

  let scrollFromTopByRem = Math.floor(scrollFromTop / rem);
  let styleChangePoint = scrollFromTop > paddingTopNum - headerTagHeight;
  if (styleChangePoint) {
    console.log(scrollFromTopByRem);
    if (!headerTag.classList.contains('header--scrolled')) {
      headerTag.classList.add('header--scrolled');
    }
  } else {
    console.log(scrollFromTopByRem);
    if (headerTag.classList.contains('header--scrolled')) {
      headerTag.classList.remove('header--scrolled');
    }
  }
});
