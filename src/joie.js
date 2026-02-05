const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio || 1;
const size = Math.floor(canvas.clientWidth * dpr);
canvas.width = size;
canvas.height = size;



function drawSquare(x,y,size,color){
  let opacity = 0;
  ctx.fillStyle = color;
  }
  if(direction == 1){
    for (let i = 0; i < 5; i++){
        opacity += 0.2;
        ctx.globalAlpha = opacity;
        ctx.fillRect(x - (5-i) * espacement ,y,size,size);
        }
    }
  if(direction == -1){
    for (let i = 0; i < 5; i++){
        opacity += 0.2;
        ctx.globalAlpha = opacity;
        ctx.fillRect(x + (5-i) * espacement ,y,size,size);
  }  
}


let taille = 0;
let espacement = 0;
let x = 0;
let direction = 1;

const speed = 3;
const squareSize = 100;


function loop(num,color1,color2,color3,color4) {
    taille = size / (num * 2);
    espacement = taille * 2;
    ctx.clearRect(0, 0, size, size);
    left_square(num,color1);
    right_square(num,color2);
    top_left(num,color3);
    bottom_right(num,color4);
    requestAnimationFrame(() => loop(num,color1,color2,color3,color4));
}


function right_square(num,color) {
    let b = 0;
    for (let i = 0; i < num; i++) {
            b = i * espacement + taille ;
            drawSquare(size - x - taille, b, taille,color);
    }
}


function left_square(num,color) {
    let a = 0;
    for (let i = 0; i < num; i++) {
            a = i * espacement ;
            drawSquare(x, a, taille,color);
    }

    x += speed * direction;

    if (x + taille >= size) {
        direction = -1;
    } else if (x <= 0) {
        direction = 1;
    }
}


function top_left(num,color) {
    let c = 0;
    for (let i = 0; i < num; i++) {
            c = i * espacement ;
            drawSquare(c, x, taille,color);
    }

}

function bottom_right(num,color) {
    let d = 0;
    for (let i = 0; i < num; i++) {
            d = i * espacement + taille ;
            drawSquare(d, size - x - taille, taille,color);
    }

}

loop(10, "blue","blue","blue","blue");