console.log('hello from js');

const headerTag = document.querySelector('.header');
const headerTagHeight = headerTag.clientHeight;

window.addEventListener('scroll', () => {
  let scrollFromTop = window.pageYOffset;

  const rem = 16;
  const marginTop = 8 * rem;
  let scrollFromTopByRem = Math.floor(scrollFromTop / rem);
  let styleChangePoint = scrollFromTop > marginTop - headerTagHeight;
  if (styleChangePoint) {
    console.log('over 8 rem!!', scrollFromTopByRem);
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
