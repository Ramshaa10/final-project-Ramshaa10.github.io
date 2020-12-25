let leftPaddleX = 10; // Position von x-achse des linken Paddle
let leftPaddleY = 150; // Position von y-achse des linken Paddle
let rightPaddleX = 300; // Position von von x-achse des rechten Paddle
let rightPaddleY = 20;
let speed = 0;
function game() {
  fill("pink");
  rect(leftPaddleX, leftPaddleY, 20, 100);
  fill("lightblue");
  rect(rightPaddleX, rightPaddleY, 20, 100);
}

function movement() {
  // arrow up, nach oben linker Paddle
  if (keyIsDown(87)) {
    leftPaddleY -= speed + 15;
  }

  // arrow down, nach unten linker Paddle
  else if (keyIsDown(83)) {
    leftPaddleY += speed + 15;
  }
  // w tase nach oben rechter Paddel
  if (keyIsDown(38)) {
    rightPaddleY -= speed + 15;
  }
  // s taste nach unten rechter Paddel
  else if (keyIsDown(40)) {
    rightPaddleY += speed + 15;
  }
}
function draw() {
  clear();
  noStroke();
  game();
  movement();
}
// Rechnung aufgestellt, also er soll es immer erhöhen
speed += speed;
