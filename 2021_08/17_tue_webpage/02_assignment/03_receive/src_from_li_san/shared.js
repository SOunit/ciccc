console.log('hello from js');

const rem = 16;
const headerTag = document.querySelector('.header');
const headerTagHeight = headerTag.clientHeight;
const remToAddScrolledStyle = 1;

window.addEventListener('scroll', () => {
  let scrollPxFromTop = window.pageYOffset;

  let scrollRemFromTop = Math.floor(scrollPxFromTop / rem);
  // console.log(scrollRemFromTop);

  if (scrollRemFromTop > remToAddScrolledStyle) {
    !headerTag.classList.contains('header--scrolled') &&
      headerTag.classList.add('header--scrolled');
  } else {
    headerTag.classList.contains('header--scrolled') &&
      headerTag.classList.remove('header--scrolled');
  }
});
