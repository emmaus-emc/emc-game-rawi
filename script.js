/* Game opdracht
  Informatica - Emmauscollege Rotterdam
  Template voor een game in JavaScript met de p5 library

  Begin met dit template voor je game opdracht,
  voeg er je eigen code aan toe.
*/

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600 // x-positie vijand
var vijandY = 200 // y-positie vijand

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 38;
var KEY_DOWN = 40;

var HP = 1;

var points = 0;



/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

// speler data



/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand

  vijandY = vijandY + 10


  if (vijandY > 721) {
    vijandY = 0;
  }


  // kogel

  // speler
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 10;
  }
  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 10;
  }
  if (keyIsDown(KEY_UP)) {
    spelerY = spelerY - 10;
  }
  if (keyIsDown(KEY_DOWN)) {
    spelerY = spelerY + 10;
  }
  if (spelerX < 0) {
    spelerX = 1280
  }

  if (spelerX > 1280) {
    spelerX = 0;
  }

  if (spelerY > 710) {
    spelerY = 720;
  }
  if (spelerY < 0) {
    spelerY = 10;
  }


};

/*
 Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */





var verwerkBotsing = function () {

  if (
    (vijandX - spelerX) < 50 &&
    (vijandX - spelerX) > -50 &&
    (vijandY - spelerY) < 50 &&
    (vijandY - spelerY) > -50
  ) {
    console.log("botsing");
    HP = HP - 1;
  }






};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {



  // achtergrond
  fill("black");
  rect(0, 0, 1280, 720)

  // vijand

  fill("blue");
  rect(vijandX - 25, vijandY - 25, 50, 50);

  fill("black");
  rect(vijandX - 25, vijandY, 50, 25);

  fill('grey');
  rect(vijandX + 12, vijandY - 25, 12, 25)

  fill('grey');
  rect(vijandX - 24, vijandY - 25, 12, 25)


  // kogel

  // speler




  fill("red");
  rect(spelerX - 25, spelerY - 25, 50, 50);

  fill("black");
  rect(spelerX - 25, spelerY, 50, 25);

  fill('grey');
  rect(spelerX + 12, spelerY - 25, 12, 25)

  fill('grey');
  rect(spelerX - 24, spelerY - 25, 12, 25)
  // punten en health
  textSize(32);
  text("HP = " + HP, 100, 50);

  points = points + 1;
  text("points = " + points, 1000, 50);


};





/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (HP < 0) {
    return true;
  } else {
    return false;
  }

};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */


function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien

}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */


/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */



function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    fill("white")
    textSize(40);
    text("druk op reload voor een nieuwe game", 400, 400)

  }
}

