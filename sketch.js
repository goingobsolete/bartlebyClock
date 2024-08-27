let wordsArray;
let nFont; // narrator font
// let dFont; // dialogue font

function preload() {
  wordsArray = loadJSON(data/words_with_line_numbers.json);
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('IBM Plex Mono');

}

function draw() {
  background('#F1F1F1');
  translate(width/2, height/2)
  fill(0);

  textSize(32);
  textAlign(CENTER, CENTER);
  // textStyle(NORMAL);
  text('Hello, World!', 0, 0);

}