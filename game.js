let speed = 0;
let ballSpeedX = 10;
let ballSpeedY = 5;
let score = [];
let ball = {
  x: 300,
  y: 100,
};
let rightPaddle = {
  x: 550,
  y: 20,
};
let leftPaddle = {
  x: 20,
  y: 150,
};

function movement() {
  // arrow up, nach oben linker Paddle
  if (keyIsDown(87)) {
    leftPaddle.y -= speed + 15;
  }

  // arrow down, nach unten linker Paddle
  else if (keyIsDown(83)) {
    leftPaddle.y += speed + 15;
  }
  // w tase nach oben recswshter Paddel
  if (keyIsDown(38)) {
    rightPaddle.y -= speed + 15;
  }
  // s taste nach unten rechter Paddel
  else if (keyIsDown(40)) {
    rightPaddle.y += speed + 15;
  }
}

function draw() {
  clear();
  background("black");
  noStroke();
  movement();
  ellipse(ball.x, ball.y, 20, 20);
  fill("pink");
  rect(leftPaddle.x, leftPaddle.y, 20, 100);
  fill("lightblue");
  rect(rightPaddle.x, rightPaddle.y, 20, 100);
  //   for-schleife für die Trennwand
  fill("white");
  for (let i = 0; i < 5; i++) {
    rect(300, 10 + i * 130, 10, 50 + i * 5);
  }
}
// Rechnung aufgestellt, also er soll es immer erhöhen
function calculate() {
  speed += speed;
}
calculate();
