let leftPaddleX = 50; // Position von x-achse des linken Paddle
let leftPaddleY = 20; // Position von y-achse des linken Paddle
let rightPaddleX = 500; // Position von von x-achse des rechten Paddle
let rightPaddleY = 20;
let speedX1 = 0;
let speedX2 = 0;
function game() {
  fill("pink");
  rect(leftPaddleX, leftPaddleY, 20, 100);
  fill("lightblue");
  rect(rightPaddleX, rightPaddleY, 20, 100);
}

function movement() {
  if (keyIsDown(87)) {
    speedX1 -= 5;
  } // arrow up, nach oben linker Paddle

  // arrow down, nach unten linker Paddle
  else if (keyIsDown(83)) {
    speedX1 += 5;
  }
  // w tase nach oben rechter Paddel
  if (keyIsDown(38)) {
    speedX2 -= 5;
  }
  // s taste nach unten rechter Paddel
  else if (keyIsDown(40)) {
    speedX2 += 5;
  }
}

function draw() {
  game();
  movement();
  speedX1 = speedX1 + 1;
  speedX2 = speedX2 + 1;

  // Rechnung aufgestellt, also er soll es immer erhöhen
}
leftPaddleY = leftPaddleX + speedX1;
rightPaddleY = rightPaddleX + speedX2;
