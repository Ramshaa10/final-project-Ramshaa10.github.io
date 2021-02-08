let speed = 0;
let ballSpeedX = 4;
let ballSpeedY = 2;
let leftScore = 0;
let rightScore = 0;
let highScore = 0;
let start = false;
let lost = false;
let help = false;
let timer = false;
let time = 100;
let newHighScore = false;
let count = false;
let startBild;
let GameOver;

function helpButton() {
  // farbwechsel
  if (help) {
    fill("lightblue");
    rect(440, 15, 100, 20, 20);
    fill("white");
    rect(40, 40, 500, 500);
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
    // help = false;
    fill("lightyellow");
    rect(200, 10, 100, 30);
    fill("lightyellow");
    textSize(120);
    textFont("skia");
    noStroke();
    fill("black");
    textSize(35);
    textStyle(BOLD);
    text("Start", 214, 35);
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
  // fill("beige");
  // rect(400, 200, 50, 50);
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
  text("Leftscore: " + leftScore, 30, 50);
  text("Rightscore: " + rightScore, 340, 50);
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
  y: 200,
  r: 30,
  // r ist der radius vom Kreis
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

function ballMovement(bal) {
  start = true;
  bal.x += ballSpeedX;
  bal.y -= ballSpeedY;

  /* wenn die position bal.x größer ist als die von p5
festgelegte Variable width ist und nehme -20 (bal.r), so
sieht es aus, dass der Ball den Paddle berührt.
ODER: bal.x ist kleiner als der Radius vom Bal.r
Ab dem Zeitpunkt soll die Geschwindigkeit abgenommen werden, 
sodass der Ball zurück geworfen wird */

  if (bal.x > width - bal.r || bal.x < bal.r) {
    ballSpeedX = -ballSpeedX;
    rightScore++;
  }
  if (bal.y > height - bal.r || bal.y < bal.r) {
    ballSpeedY = -ballSpeedY;
    leftScore++;
  }
}

function movement() {
  // arrow up, nach oben linker Paddle
  if (keyIsDown(87)) {
    //hier wurde speed, der zugehörige Wert von 15 zugeteilt
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
  ballMovement(bal);
  //Objekterzeugung
  fill("white");
  ellipse(bal.x, bal.y, bal.r, bal.r);
  fill("pink");
  rect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
  fill("lightblue");
  rect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
  fill("white");

  // Clickfunktion von startbutton
  if (start) {
    if (
      mouseIsPressed === true &&
      mouseX >= 200 &&
      mouseX <= 298 &&
      mouseY >= 8 &&
      mouseY <= 38
    ) {
      start = false;
      lost = false;
    }
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
    // help = false;
  }
  if (lost) {
    lost = false;
  }
}
