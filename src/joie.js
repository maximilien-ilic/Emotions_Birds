const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio || 1;
const size = Math.floor(canvas.clientWidth * dpr);
canvas.width = size;
canvas.height = size;

function drawSquareHorizontal(x,y,size,color){
  let opacity = 0;
  ctx.fillStyle = color;
  
  if(direction == 1){
    for (let i = 0; i < 5; i++){
        opacity += 0.2;
        ctx.globalAlpha = opacity;
        ctx.fillRect(x - (5-i) * 3, y, size, size);
    }
  }
  if(direction == -1){
    for (let i = 0; i < 5; i++){
        opacity += 0.2;
        ctx.globalAlpha = opacity;
        ctx.fillRect(x + (5-i) * 3, y, size, size);
    }  
  }
  ctx.globalAlpha = 1;
}

function drawSquareVertical(x,y,size,color){
  let opacity = 0;
  ctx.fillStyle = color;
  
  if(direction == 1){
    for (let i = 0; i < 5; i++){
        opacity += 0.2;
        ctx.globalAlpha = opacity;
        ctx.fillRect(x, y - (5-i) * 3, size, size);
    }
  }
  if(direction == -1){
    for (let i = 0; i < 5; i++){
        opacity += 0.2;
        ctx.globalAlpha = opacity;
        ctx.fillRect(x, y + (5-i) * 3, size, size);
    }  
  }
  ctx.globalAlpha = 1;
}

let taille = 0;
let espacement = 0;
let x = 0;  
let direction = 1;
let frameCount = 0;
let speed = 3;
const squareSize = 100;
let currentSpeed = 3;
let nombreCarres = 18; 

function loop(num, color, vitesse) {
    taille = size / (num * 2);
    espacement = taille * 2;
    currentSpeed = 2 + Math.abs(Math.sin(frameCount * 0.01)) * 4;
    
    //permet de changer de couleur automatique en focntion des frames
    const hue = (frameCount * 0.5) % 360;
    const dynamicColor = `hsl(${hue}, 100%, 50%)`;
    
    frameCount++;
    ctx.clearRect(0, 0, size, size);
    left_square(num, dynamicColor);
    right_square(num, dynamicColor);
    top_left(num, dynamicColor);
    bottom_right(num, dynamicColor);
    requestAnimationFrame(() => loop(nombreCarres, color, vitesse));
}

function right_square(num,color) {
    let b = 0;
    for (let i = 0; i < num; i++) {
            b = i * espacement + taille;
            drawSquareHorizontal(size - x - taille, b, taille, color);
    }
}

function left_square(num,color) {
    let a = 0;
    for (let i = 0; i < num; i++) {
            a = i * espacement;
            drawSquareHorizontal(x, a, taille, color);
    }

    x += currentSpeed * direction;

    if (x + taille >= size) {
        direction = -1;
    } else if (x <= 0) {
        direction = 1;
    }
}

function top_left(num,color) {
    let c = 0;
    for (let i = 0; i < num; i++) {
            c = i * espacement;
            drawSquareVertical(c, x, taille, color);
    }
}

function bottom_right(num,color) {
    let d = 0;
    for (let i = 0; i < num; i++) {
            d = i * espacement + taille;
            drawSquareVertical(d, size - x - taille, taille, color);
    }
}

const btnMoins = document.getElementById("moins");
const btnPlus = document.getElementById("plus");
const affichage = document.getElementById("nombre");

btnPlus.addEventListener("click", () => {
    if (nombreCarres < 100) { 
        nombreCarres++;
        affichage.textContent = nombreCarres;
    }
});

btnMoins.addEventListener("click", () => {
    if (nombreCarres > 1) { 
        nombreCarres--;
        affichage.textContent = nombreCarres;
    }
});

loop(nombreCarres, "red", 5);