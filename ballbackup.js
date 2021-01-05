let speed = 5;
let score = 0;
let ballSpeedX = 2;
let ballSpeedY = 5;
let rightscore = 0;
let leftscore = 0;

function setup() {
  createCanvas(500, 500);
}

function design() {
  //for-schleife für die Trennwand
  fill("white");
  for (let i = 0; i < 6; i++) {
    rect(300, 10 + i * 130, 5, 50);
  }
}

function count() {
  noStroke();
  textFont("skia");
  textSize(20);
  fill("white");
  text("Leftscore: " + leftscore, 30, 50);
  text("Rightscore: " + rightscore, 360, 50);
}
let ball = {
  x: Math.floor(Math.random() * 650),
  y: Math.floor(Math.random() * 650),
  w: 20,
  h: 20,
};
let rightPaddle = {
  x: 560,
  y: 20,
  w: 20,
  h: 100,
};
let leftPaddle = {
  x: 0,
  y: 150,
  w: 20,
  h: 100,
};

function ballMovement(ball) {
  if (ball.x < 20 || ball.x > 500 - 20) {
    ballSpeedX *= -1;
  }
  if (ball.y < 20 || ball.y > 500 - 20) {
    ballSpeedY *= -1;
  }

  //Rechnung aufgestellt
  ball.x += ballSpeedX;
  ball.y += ballSpeedY;
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

function touch(ball) {
  if (ball.x > 39 && ball.x < mouseX + 549 && ball.y + 20 >= 475) {
    ballSpeedX *= -1;
    ballSpeedY *= -1;
    leftscore++;
  }
}
function draw() {
  clear();
  noStroke();
  design();
  count();
  ballMovement(ball);
  touch(ball);
  movement();
  fill("white");
  ellipse(ball.x, ball.y, ball.w, ball.h);
  //Objekterzeugung der Paddles
  fill("pink");
  rect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
  fill("lightblue");
  rect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
  fill("white");
}
