let speed = 0;
let score = 0;
let ballSpeedX = 3;
let ballSpeedY = 10;
let rightscore = 0;
let leftscore = 0;

function setup() {
  createCanvas(500, 500);
}

function design() {
  //schwarzer Kasten
  fill("black");
  rect(0, 0, 1500, 1500);

  //for-schleife für die Trennwand
  fill("white");
  for (let i = 0; i < 5; i++) {
    rect(300, 10 + i * 130, 10, 50 + i * 5);
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
  x: Math.floor(Math.random() * 600) + 50,
  y: Math.floor(Math.random() * 600) + 50,
  w: 20,
  h: 20,
};
let rightPaddle = {
  x: 550,
  y: 20,
  w: 20,
  h: 100,
};
let leftPaddle = {
  x: 20,
  y: 150,
  w: 20,
  h: 100,
};

function ballMovement(ball) {
  if (ball.x < 30 || ball.x > 500 - 30) {
    ballSpeedX *= -1;
  }
  if (ball.y < 30 || ball.y > 500 - 30) {
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
