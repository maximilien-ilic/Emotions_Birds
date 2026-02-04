const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio || 1;
const size = Math.floor(canvas.clientWidth * dpr);
canvas.width = size;
canvas.height = size;


function drawSquare(x,y,size){
  ctx.fillStyle = "red";
  ctx.fillRect(x,y,size,size);

}
let xPos = 0;
let x = 0;
let direction = 1;
const speed = 2;
const squareSize = 100;



function loop(num) {
    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();

    drawSquare(x, num, 30);

    x += speed * direction;

    if (x + squareSize >= size) {
        direction = -1;
    } else if (x <= 0) {
        direction = 1;
    }

    requestAnimationFrame(() => loop(num));
}

function satisfaction(num) {
    let a = 0;
    for (let i = 0; i < num; i++) {
            a = i * 10 ;
            loop(a);
    }
}

satisfaction(10);
