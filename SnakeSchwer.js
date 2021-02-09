let snakex = [300];
let snakey = [300];
let direction = 0; //zuweisung für Richtung/ Bewegung
let score = 0;
let highscore = 0;
let time = 0; //zuweisung für "Zeit" bis zur nächsten Bewegung
let movement = 0;
let fast = false;
let begin = true;
let newfood = true;
let lost = false;
let newhighscore = false;
let help = false;
let foodx;
let foody;
let pox;
let poy;
var mario;
var pilz;

function setup() {
  let canvas = createCanvas(600, 620);
  canvas.parent("SnakeSchwer");
}
mario = loadImage("Bilder/supermario.jpg");
pilz = loadImage("Bilder/pilz.jpg");

function spielfeld() {
  stroke(255);
  line(100, 100, 500, 100);
  line(500, 100, 500, 500);
  line(500, 500, 100, 500);
  line(100, 500, 100, 100);
}

function helpButton() {
  textSize(16);
  textFont("georgia");
  fill("black");
  rect(270, 587, 57, 30);
  fill(215, 214, 212);
  text("help", 282, 610);

  if (help === true) {
    fill(223, 160, 85);
    rect(140, 140, 300, 300);
    fill("black");
    text(
      "Verwende die Pfeiltasten nach oben,\n unten,links und rechts um Mario\n zu bewegen.",
      140,
      270
    );
  }
}

function startButton() {
  if (begin === true) {
    noStroke();
    fill(195, 38, 22);
    textSize(35);
    text("Start", 254, 556);
  } else {
    fill(195, 38, 22);
    textSize(35);
    text("Start", 254, 556);
  }
}

function gameOver() {
  if (lost === true) {
    fill(223, 160, 85);
    rect(200, 200, 200, 200);
    fill("white");
    text("you lost", 240, 300);
  }
}

function food() {
  if (newfood === true) {
    foodx = Math.floor(random(8, 32)) * 15;
    foody = Math.floor(random(8, 32)) * 15;
    newfood = false;
  }
  image(pilz, foodx, foody, 15, 15);
}

function eat() {
  if (snakex[0] === foodx && snakey[0] === foody) {
    newfood = true;
    snakex.push(pox);
    snakey.push(poy);
    fast = true;
    score = score + 1;
    if (score > highscore) {
      highscore = highscore + 1;
      newhighscore = true;
    }
  }
}

function snake() {
  for (i = 1; i < snakex.length; i++) {
    //für snake von vorne bis hinten sollen rechts gezeichnet werden
    fill("red");
    noStroke();
    image(mario, snakex[i], snakey[i], 15, 15); //i für verschiedenen Array-Stellen
    image(mario, snakex[i], snakey[i], 15, 15);
  }
  image(mario, pox, poy, 15, 15);
}

function dead() {
  let death = false;
  if (
    snakex[0] <= 100 ||
    snakex[0] >= 490 ||
    snakey[0] <= 100 ||
    snakey[0] >= 490
  ) {
    //wenn snake den Rand berührt auf Anfang
    snakex = [300];
    snakey = [300];
    direction = 0;
    score = 0;
    begin = true;
    lost = true;
    death = true;
  }
  return death;
}

function dead2() {
  for (i = 1; i < snakex.length; i++) {
    if (snakex[0] === snakex[i] && snakey[0] === snakey[i]) {
      snakex = [300];
      snakey = [300];
      direction = 0;
      score = 0;
      begin = true;
      lost = true;
    }
  }
}

//EXTRA
function speed() {
  time++;
  if (time === 4) {
    //draw läuft 4 mal durch bis snake sich erneut um 10 bewegt
    time = 0;
    move(direction);
    if (fast === true) {
      time = time + 2;
      movement++;
      if (movement === 20) {
        //snake wird für 50 Durchgänge schneller, dann wieder normal
        movement = 0;
        fast = false;
      }
    }
  }
}

function move(direction) {
  if (begin == false) {
    if (direction != 0) {
      //wenn direction nicht null ist (snake also läuft)
      pox = snakex[snakex.length - 1];
      poy = snakey[snakey.length - 1];

      for (i = snakex.length - 1; i > 0; i--) {
        snakex[i] = snakex[i - 1];
        snakey[i] = snakey[i - 1];
      }
    }

    if (direction === 1) {
      snakex[0] = snakex[0] - 15;
    }
    if (direction === 2) {
      snakey[0] = snakey[0] - 15;
    }
    if (direction === 3) {
      snakex[0] = snakex[0] + 15;
    }
    if (direction === 4) {
      snakey[0] = snakey[0] + 15;
    }
  }
}

function scoretext() {
  textFont("Georgia");
  textStyle(BOLD);
  noStroke();
  textSize(30);
  fill(252, 223, 163);
  text("score: " + score, 120, 70);
}

function highscoretext() {
  textFont("Georgia");
  noStroke();
  textSize(30);
  fill(252, 223, 163);
  text("highscore: " + highscore, 300, 70);
}

function draw() {
  clear();
  spielfeld();
  snake();
  dead();
  dead2();
  food();
  eat();
  scoretext();
  gameOver();
  highscoretext();
  helpButton();
  startButton();
  speed();
  //STEUERUNG
  if (keyIsDown(37)) {
    //zuweisung von direction
    direction = 1; //links
  }
  if (keyIsDown(39)) {
    direction = 3; //rechts
  }
  if (keyIsDown(38)) {
    direction = 2; //oben
  }
  if (keyIsDown(40)) {
    direction = 4; //unten
  }

  if (begin) {
    if (
      mouseIsPressed &&
      mouseX > 250 &&
      mouseX < 350 &&
      mouseY > 520 &&
      mouseY < 570
    ) {
      //start Button
      direction = 1;
      begin = false;
      lost = false;
      newhighscore = false;
    }
  }

  if (
    mouseIsPressed &&
    mouseX > 270 &&
    mouseX < 330 &&
    mouseY > 590 &&
    mouseY < 620
  ) {
    //help Button
    help = true;
  }
}

function mousePressed() {
  if (helpButton) {
    help = false;
  }
}
