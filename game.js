let leftPaddleX = 10; // Position von x-achse des linken Paddle
let leftPaddleY = 150; // Position von y-achse des linken Paddle
let rightPaddleX = 550; // Position von von x-achse des rechten Paddle
let rightPaddleY = 20;
let speed = 0;
let score = [];

function game() {
  fill("pink");
  rect(leftPaddleX, leftPaddleY, 20, 100);
  fill("lightblue");
  rect(rightPaddleX, rightPaddleY, 20, 100);
  fill("white");
  //   for-schleife für die Trennwand
  for (let i = 0; i < 5; i++) {
    rect(300, 10 + i * 130, 10, 50 + i * 5);
  }
}
function ball() {
  fill("white");
  ellipse(300, 100, 20, 20);
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
  // w tase nach oben recswshter Paddel
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
  background("black");
  noStroke();
  game();
  movement();
  ball();
}
// Rechnung aufgestellt, also er soll es immer erhöhen
speed += speed;
