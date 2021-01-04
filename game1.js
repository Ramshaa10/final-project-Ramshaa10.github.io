let speed = 0;
let ballSpeedX = 10;
let ballSpeedY = 5;
let score = 0;
let highScore = 0;
// let leftscore=0;?
let start = false;
let begin = true;
let lost = false;
let help = false;
let newHighScore = false;
let startBild;
let GameOver;

function helpButton() {
  textSize(16);
  fill(252, 227, 255);

  text("help", 275, 610);

  if (help === true) {
    fill("green");
    ellipse(200, 200, 10, 10);
  }
}

function startButton() {
  start = true;
  if (
    start === true &&
    mouseIsPressed === true &&
    mouseX >= 200 &&
    mouseX <= 298 &&
    mouseY >= 8 &&
    mouseY <= 38
  ) {
    fill("yellow");
    rect(200, 10, 100, 30);
  } else {
    fill("red");
    rect(200, 10, 100, 30);
    textFont("skia");
    noStroke();
    fill("white");
    textSize(35);
    textStyle(BOLD);
    text("Start", 214, 35);
  }
}

function youlost() {
  if (lost === true) {
    fill("yellow");
    rect(400, 200, 50, 50);
  }
}
function design() {
  //schwarzer Kasten
  // fill("black");
  // rect(0, 0, 1500, 1500);

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
  fill("lightyellow");
  text("score: " + score, 30, 50);
}

function highScoreCount() {
  noStroke();
  textFont("skia");
  textSize(20);
  fill(21, 129, 153);
  text("highscore: " + highScore, 620, 50);

  if (newHighScore === true && lost === true) {
    fill("blue");
    ellipse(359, 110, 45, 20);
  }
}
let bal = {
  x: 300,
  y: 100,
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

function ballMovement() {
  // bei den Winkel Hilfe entnommen von: https://www.youtube.com/watch?v=nl0KXCa5pJk

  //Rechnung aufgestellt
  ballSpeedX += ballSpeedX;
  ballSpeedX -= ballSpeedX;
  ballSpeedY += ballSpeedY;
  ballSpeedY -= ballSpeedY;
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
  count();
  startButton();
  helpButton();
  youlost();
  highScoreCount();
  ballMovement();
  movement();
  fill("white");
  ellipse(bal.x, bal.y, bal.w, bal.h);
  //Objekterzeugung der Paddles
  fill("pink");
  rect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
  fill("lightblue");
  rect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
  fill("white");
  //
  //   if (start) {
  //     if (
  //       mouseIsPressed === true &&
  //       mouseX > 250 &&
  //       mouseX < 350 &&
  //       mouseY > 520 &&
  //       mouseY < 570
  //     ) {
  //       //Start
  //       start = false;
  //       lost = false;
  //       newHighScore = false;
  //     }
  //   }

  //   if (
  //     mouseIsPressed &&
  //     mouseX > 270 &&
  //     mouseX < 330 &&
  //     mouseY > 590 &&
  //     mouseY < 620
  //   ) {
  //     //help
  //     help = true;
  //   }
  //   image(startBild, 0, 0, 850, 400);
}

function mousePressed() {
  if (help) {
    help = false;
  }

  if (lost) {
    lost = false;
  }
  if (start) {
    start = false;
  }
}
