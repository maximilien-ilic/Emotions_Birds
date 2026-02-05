const elm = document.querySelector('.but');
const elm2 = document.querySelector('.butt');
const greenBird1 = document.querySelector('#greenBird1');
greenBird1.addEventListener("click", () => {
    greenBird1.classList.add('transition');
    greenBird1.addEventListener('transitionend', () => {
    greenBird1.classList.add('disp');
    window.scrollTo({
      left: 2800,
      top: 0,
      behavior: 'smooth'
    });
  }, { once: true });
});
