let speed = 0;
let ballSpeedX = 10;
let ballSpeedY = 5;
let score = 0;
let highScore = 0;
let start = true;
let lost = false;
let help = false;
let newHighScore = false;
let startBild;
let GameOver;

function preload() {
  startBild = loadImage("Startbildschirm-Zoo.jpg");
}
function setup() {
  startBild.loadPixels();
}

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
  if (start === true) {
    image(startBild, 240, 510, 120);

    textFont("skia");
    noStroke();
    fill(29, 17, 89);
    textSize(35);
    textStyle(BOLD);
    text("Start", 254, 556);
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
  textSize(40);
  fill("red");
  text("score: " + score, 30, 50);
}

function highScoreCount() {
  noStroke();
  textFont("skia");
  textSize(40);
  fill(21, 129, 153);
  text("highscore: " + highScore, 620, 50);

  if (newHighScore === true && lost === true) {
    fill("blue");
    ellipse(359, 110, 45, 20);
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
  // bei den Winkel Hilfe entnommen von: https://www.youtube.com/watch?v=nl0KXCa5pJk

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
  image(startBild, 25, 25, 50, 50);
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
  ellipse(ball.x, ball.y, 20, 20);
  //Objekterzeugung der Paddles
  fill("pink");
  rect(leftPaddle.x, leftPaddle.y, 20, 100);
  fill("lightblue");
  rect(rightPaddle.x, rightPaddle.y, 20, 100);
  fill("white");
  //
  if (start == true) {
    if (
      mouseIsPressed === true &&
      mouseX > 250 &&
      mouseX < 350 &&
      mouseY > 520 &&
      mouseY < 570
    ) {
      //Start
      start = false;
      lost = false;
      newHighScore = false;
    }
  }

  if (
    mouseIsPressed === true &&
    mouseX > 270 &&
    mouseX < 330 &&
    mouseY > 590 &&
    mouseY < 620
  ) {
    //help
    help = true;
  }
}

function mousePressed() {
  if (help) {
    help = false;
  }

  if (lost) {
    lost = false;
  }
}
