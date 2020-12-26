let speed = 0;
let ballSpeedX = 10;
let ballSpeedY = 5;
let score = [];

function design() {
  //schwarzer Kasten
  fill("black");
  rect(0, 0, 1500, 1500);
  // for-schleife für die Trennwand
  fill("white");
  for (let i = 0; i < 5; i++) {
    rect(300, 10 + i * 130, 10, 50 + i * 5);
  }
}
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

function ballMovement() {
  //Rechnung aufgestellt
  ball.x += ballSpeedX;
  ball.x -= ballSpeedX;
  ball.y += ballSpeedY;
  ball.y -= ballSpeedY;
}

function movement() {
  // arrow up, nach oben linker Paddle
  if (keyIsDown(87)) {
    leftPaddle.y -= speed + 15;
  }

  // arrow down, nach unten linker Paddle
  else if (keyIsDown(83)) {
    leftPaddle.y += speed + 15;
  }
  // w tase nach oben rechter Paddel
  if (keyIsDown(38)) {
    rightPaddle.y -= speed + 15;
  }
  // s taste nach unten rechter Paddel
  else if (keyIsDown(40)) {
    rightPaddle.y += speed + 15;
  }
  // Rechnung aufgestellt, Erhöhung von speeed
  speed += speed;
}

function draw() {
  clear();
  noStroke();
  design();
  ballMovement();
  movement();
  ellipse(ball.x, ball.y, 20, 20);
  //Objekterzeugung der Paddles
  fill("pink");
  rect(leftPaddle.x, leftPaddle.y, 20, 100);
  fill("lightblue");
  rect(rightPaddle.x, rightPaddle.y, 20, 100);
}
