var fieldX = 200;
var fieldY = 100;
var fieldW = 600;
var fieldH = 400;

var leftPaddleX = 20;
var leftPaddleY = 150;
var leftPaddleW = 20;
var leftPaddleH = 100;
var BallSpeed = 0;

var rightPaddleX = 560;
var rightPaddleY = 150;
var rightPaddleW = 20;
var rightPaddleH = 100;

var Ballx = fieldW / 2 + fieldX;
var Bally = fieldH / 2 + fieldY;
var BallD = 5;

var leftPaddlePoint = 0;
var rightPaddlePoint = 0;
var BallDir = 0;
var BallXSpeed = BallSpeed;
var BallYSpeed = BallSpeed;

var resetButtonX = 550;
var resetButtonY = 700;
var resetButtonW = 150;
var resetButtonH = 50;

var helpButtonX = 250;
var helpButtonY = 700;
var helpButtonW = 150;
var helpButtonH = 50;

var luigi;
var mario;
var pilz;
var rasen;

var help = false;
var start = true;
var end = false;

function setup() {
  let canvas = createCanvas(1000, 800);
  canvas.parent("PongSchwer");
}

// fieldscreen = loadImage("Bilder/rasen.jpg");
mario = loadImage("Bilder/supermario.jpg");
luigi = loadImage("Bilder/luigi.jpg");
pilz = loadImage("Bilder/pilz.jpg");

function Score() {
  textSize(20);
  fill(255);
  strokeWeight(1);
  textFont("italic");
  text(leftPaddlePoint, fieldX + 100, fieldY + 450);
  text(rightPaddlePoint, fieldX + 500, fieldY + 450);

  if (Ballx < 20 + fieldX) {
    rightPaddlePoint += 1;
  }
  if (Ballx > 580 + fieldX) {
    leftPaddlePoint += 1;
  }
}
function helpButton() {
  textSize(30);
  textFont("italic");
  fill(252, 223, 163);
  rect(helpButtonX, helpButtonY, helpButtonW, helpButtonH);
  fill(73, 52, 51);
  text("Help", helpButtonX + helpButtonW / 3, helpButtonY + helpButtonH / 1.5);

  if (help) {
    start = false;
    fill(223, 160, 85);
    rect(350, 140, 300, 300);
    fill("black");
    textSize(15);
    text(
      "Verwende die Pfeiltasten nach oben,\n und unten um Mario zu bewegen.\n Um Luigi zu bewegen verwende die Tasten\n W und S.",
      360,
      250
    );
  }
}

function field() {
  fill("black");
  strokeWeight(10);
  stroke(168, 157, 131);
  rect(0, 0, 1000, 800);
  fill(195, 38, 22);
  rect(fieldX, fieldY, fieldW, fieldH, 30);
  stroke(0);
  strokeWeight(2);
}

function leftPaddle() {
  //movement
  image(
    luigi,
    leftPaddleX + fieldX,
    leftPaddleY + fieldY,
    leftPaddleW,
    leftPaddleH
  );

  //Up
  if (leftPaddleY > 20 && keyIsDown(87)) {
    leftPaddleY = leftPaddleY - 3;
  }
  //Down
  if (leftPaddleY < 280 && keyIsDown(83)) {
    leftPaddleY = leftPaddleY + 3;
  }
}
if (
  Ballx > leftPaddleX - leftPaddleW + fieldX + BallD / 2 &&
  Ballx < leftPaddleX + leftPaddleW + fieldX + BallD / 2 &&
  Bally < leftPaddleY + leftPaddleW + fieldY + BallD / 2 &&
  Bally > leftPaddleY + fieldY + BallD / 2
) {
  BallDir += 1;
}

function rightPaddle() {
  //movement
  image(
    mario,
    rightPaddleX + fieldX,
    rightPaddleY + fieldY,
    rightPaddleW,
    rightPaddleH
  );
  //W up
  if (rightPaddleY > 20 && keyIsDown(38)) {
    rightPaddleY = rightPaddleY - 40;
  }
  //S down
  if (rightPaddleY < 280 && keyIsDown(40)) {
    rightPaddleY = rightPaddleY + 40;
  }
}

function ball() {
  image(pilz, Ballx - 15, Bally - 15, 30, 30);
  if (start) {
    //   Ball move
    Ballx = Ballx + BallXSpeed;
    Bally = Bally + BallYSpeed;

    if (
      Ballx < 0 + fieldX + BallD / 2.5 ||
      Ballx > fieldW + fieldX - BallD / 2.5
    ) {
      Ballx = fieldW / 2 + fieldX;
      Bally = fieldH / 2 + fieldY;
      BallXSpeed *= -1;
    }

    if (
      Bally < 10 + fieldY + BallD / 2.5 ||
      Bally > 390 + fieldY - BallD / 2.5
    ) {
      BallYSpeed *= -1;
    }
    edges(leftPaddleX, leftPaddleY, leftPaddleW, leftPaddleH);
    edges(rightPaddleX, rightPaddleY, rightPaddleW, rightPaddleH);
  }

  function edges(X, Y, sizeX, sizeY) {
    if (
      Ballx > X - sizeX + fieldX + BallD / 2 &&
      Ballx < X + sizeX + fieldX + BallD / 2 &&
      Bally < Y + sizeY + fieldY + BallD / 2 &&
      Bally > Y + fieldY + BallD / 2
    ) {
      BallXSpeed *= -1;
      var pad = Bally - fieldY - Y;
      if (pad > 45 && pad < 55) {
        BallSpeed *= -1;
      } else {
        if (BallSpeed < 0) {
          BallSpeed *= -1;
        } else {
          BallSpeed *= 1;
        }
      }
    }
  }
}

function resetButton() {
  fill(252, 223, 163);
  rect(resetButtonX, resetButtonY, resetButtonW, resetButtonH);
  fill(73, 52, 51);
  noStroke();
  textFont("italic");
  textSize(30);
  text(
    "Start",
    resetButtonX + resetButtonW / 3,
    resetButtonY + resetButtonH / 1.5
  );

  if (
    mouseX > resetButtonX &&
    mouseX < resetButtonX + resetButtonW &&
    mouseY > resetButtonY &&
    mouseY < resetButtonY + resetButtonH
  ) {
    if (mouseIsPressed) {
      Ballx = fieldW / 2 + fieldX;
      BallXSpeed = 10;
      BallYSpeed = 10;
      leftPaddlePoint = 0;
      rightPaddlePoint = 0;
      BallDir = 0;
      help = false;
      start = true;
    }
  }
}
function gameOver() {
  end = true;
  if (rightPaddlePoint === 5 || leftPaddlePoint === 5) {
    fill("white");
    rect(300, 300, 300, 300);
    fill("black");
    text("You lost", 300, 300);
    rightPaddlePoint = 0;
    leftPaddlePoint = 0;

    start = false;
  }
}

function draw() {
  clear();
  field();
  leftPaddle();
  rightPaddle();
  ball();
  Score();
  resetButton();
  helpButton();
  gameOver();

  if (
    mouseIsPressed &&
    mouseX > helpButtonX &&
    mouseX < helpButtonX + helpButtonW &&
    mouseY > helpButtonY &&
    mouseY < helpButtonY + helpButtonH
  ) {
    //help Button
    help = true;
  }
}
