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
let count = false;
let startBild;
let GameOver;
let number = ["3", "2", "1"];

function helpButton() {
  // farbwechsel
  if (help) {
    fill("lightblue");
    rect(440, 15, 100, 20, 20);
  } else {
    // grafische darstellung
    fill("lightgreen");
    rect(440, 15, 100, 20, 20);
    textSize(16);
    fill("white");
    text("help", 475, 30);
  }
}
function startButton() {
  //farbwechsel
  if (start) {
    fill("yellow");
    rect(200, 10, 100, 30);
  } else {
    //grafische Darstellung
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
  //for-schleife für die Trennwand
  fill("white");
  for (let i = 0; i < 5; i++) {
    rect(300, 10 + i * 130, 10, 50 + i * 5);
  }
}

function Count() {
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
// hier die Objekte deklariert
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
  //Rechnung aufgestellt, damit sich der Ball bewegt
  ballSpeedX += ballSpeedX;
  ballSpeedY += ballSpeedY;
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
  Count();
  startButton();
  helpButton();
  movement();
  youlost();
  highScoreCount();
  ballMovement();
  fill("white");
  ellipse(bal.x, bal.y, bal.w, bal.h);
  //Objekterzeugung der Paddles
  fill("pink");
  rect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
  fill("lightblue");
  rect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
  fill("white");
  // Clickfunktion von startbutton
  if (
    mouseIsPressed === true &&
    mouseX >= 200 &&
    mouseX <= 298 &&
    mouseY >= 8 &&
    mouseY <= 38
  ) {
    start = true;
    begin = false;
  }
  // Clickfunktion von helpbutton
  if (
    mouseIsPressed === true &&
    mouseX >= 445 &&
    mouseX <= 534 &&
    mouseY >= 12 &&
    mouseY <= 34
  ) {
    help = true;
  }
}
/* da ich nirgends help auf false setze, erteile ich hier 
 den Befehl nach Ausführung die Variable wieder auf 
 false zu setzen. */
function mouseClicked() {
  if (help) {
    helpb = false;
  }
  if (lost) {
    lost = false;
  }
}
