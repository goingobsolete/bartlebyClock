let wordsArray;
let nFont; // narrator font
// let dFont; // dialogue font

function preload() {
  wordsArray = loadJSON(data/words_with_line_numbers.json, onJSONLoaded, onJSONLoadError);

  // Load the font from Google Fonts
  nFont = loadFont('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap');
} 

function onJSONLoaded(data) {
  wordsArray = data;
  console.log('JSON loaded');
}
function onJSONError(error) {
  console.error('Error loading JSON:', error);

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(nFont);

}

function draw() {
  background(255,0,0));
  translate(width/2, height/2)
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textFont('IBM Plex Mono', 200);
  text('Hello, World!', 0, 0);

}