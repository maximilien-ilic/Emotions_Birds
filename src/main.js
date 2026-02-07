
const branches1 = document.querySelector(".branch1");
const branches2 = document.querySelector(".branch2");
const branches3 = document.querySelector(".branch3");
const branches4 = document.querySelector(".branch4");
const branches5 = document.querySelector(".branch5");
const branches6 = document.querySelector(".branch6");
const triste = document.getElementById('triste');
const colere = document.getElementById('colere');
const principale = document.getElementById('principale');
const joie = document.getElementById('joie');

// first 
const blueBird1 = document.querySelector('#blueBird1');
const greenBird1 = document.querySelector('#greenBird1');
blueBird1.addEventListener("click", () => {
  blueBird1.classList.remove('wait');
    triste.play();
    colere.pause();
    principale.pause();
    joie.pause();
    blueBird1.classList.add('transition');
    branches2.classList.add('lancer2');
    blueBird1.addEventListener('animationend', () => {
    blueBird1.classList.add('disp');
      blueBird1.classList.remove('transition');

    window.scrollTo({
  left: window.scrollX + window.innerWidth,
  top: 0,
  behavior: 'smooth'
});
  },);
  
  setTimeout(() => {
    branches2.classList.remove('lancer2');
  blueBird1.classList.remove('disp');
  blueBird1.classList.add('wait');
}, 4000);
});

greenBird1.addEventListener("click", () => {
  greenBird1.classList.remove('wait');
    triste.pause();
    colere.pause();
    principale.pause();
    joie.play();
  branches1.classList.add('lancer1');
    greenBird1.classList.add('transition2');
    greenBird1.addEventListener('animationend', () => {
    greenBird1.classList.add('disp');
      greenBird1.classList.remove('transition2');
    window.scrollTo({
  left: window.scrollX + window.innerWidth,
  top: 0,
  behavior: 'smooth'
});
  }, );
  
  setTimeout(() => {
    branches1.classList.remove('lancer1');
greenBird1.classList.remove('disp');
 greenBird1.classList.add('wait');
}, 4000);
});


// second page

const redBird1 = document.querySelector('#redBird1');
const greenBird2 = document.querySelector('#greenBird2');
greenBird2.addEventListener("click", () => {
  greenBird2.classList.remove('wait2');
      triste.pause();
    colere.pause();
    principale.pause();
    joie.play();
  branches4.classList.add('lancer2');
    greenBird2.classList.add('transition3');
    greenBird2.addEventListener('animationend', () => {
    greenBird2.classList.add('disp');
      greenBird2.classList.remove('transition3');
    window.scrollTo({
  left: window.scrollX + window.innerWidth,
  top: 0,
  behavior: 'smooth'
});
  }, );
  
  setTimeout(() => {
    branches4.classList.remove('lancer2');
greenBird2.classList.remove('disp');
greenBird2.classList.add('wait2');
}, 4000);
});

redBird1.addEventListener("click", () => {
  redBird1.classList.remove('wait2');
      triste.pause();
    colere.play();
    principale.pause();
    joie.pause();
  branches3.classList.add('lancer1');
    redBird1.classList.add('transition4');
    redBird1.addEventListener('animationend', () => {
    redBird1.classList.add('disp');
      redBird1.classList.remove('transition4');
    window.scrollTo({
  left: window.scrollX - window.innerWidth,
  top: 0,
  behavior: 'smooth'
});
  }, );
  
  setTimeout(() => {
    branches3.classList.remove('lancer1');
    redBird1.classList.remove('disp');
     redBird1.classList.add('wait2');
}, 4000);
});

// troisieme page

const blueBird2 = document.querySelector('#blueBird2');
const redBird2 = document.querySelector('#redBird2');
blueBird2.addEventListener("click", () => {
  blueBird2.classList.remove('wait2');
    triste.play();
    colere.pause();
    principale.pause();
    joie.pause();
  branches5.classList.add('lancer1');
    blueBird2.classList.add('transition4');
    blueBird2.addEventListener('animationend', () => {
    blueBird2.classList.add('disp');
      blueBird2.classList.remove('transition4');
    window.scrollTo({
  left: window.scrollX - window.innerWidth,
  top: 0,
  behavior: 'smooth'
});
  }, );
  
  setTimeout(() => {
    branches5.classList.remove('lancer1');
  blueBird2.classList.remove('disp');
  blueBird2.classList.add('wait2');
}, 4000);
});

redBird2.addEventListener("click", () => {
  redBird2.classList.remove('wait');
      triste.pause();
    colere.play();
    principale.pause();
    joie.pause();
      branches6.classList.add('lancer2');
    redBird2.classList.add('transition');

    redBird2.addEventListener('animationend', () => {
    redBird2.classList.add('disp');
      redBird2.classList.remove('transition');
    window.scrollTo({
  left: window.scrollX + window.innerWidth,
  top: 0,
  behavior: 'smooth'
});
  }, );
  
  setTimeout(() => {
    branches6.classList.remove('lancer2');
redBird2.classList.remove('disp');
redBird2.classList.add('wait');
}, 4000);
});


// pluie
const rainContainer = document.querySelector('#carre3');
function createRaindrop(){

const raindrop = document.createElement('div');
raindrop.classList.add('raindrop');
const containerWidth = rainContainer.clientWidth;
raindrop.style.left = Math.random() * containerWidth +  'px';
const duration = Math.random() * 1 + 0.5;
raindrop.style.animationDuration = duration + 's';
rainContainer.appendChild(raindrop);
setTimeout(() => {
  raindrop.remove();
}, duration * 5000);

}
setInterval(createRaindrop, 50)