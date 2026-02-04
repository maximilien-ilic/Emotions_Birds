const elm = document.querySelector('.but');
const elm2 = document.querySelector('.butt');
const elmc = document.querySelector('#carre2');
elm.addEventListener("click", () => {
    elmc.classList.add('transition');
    elmc.addEventListener('transitionend', () => {
    elmc.classList.add('disp');
    window.scrollTo({
      left: 2800,
      top: 0,
      behavior: 'smooth'
    });
  }, { once: true });
});
