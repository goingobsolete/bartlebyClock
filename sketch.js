
let wordsArray;
let currentIndex = 0;
let previousIndex = -1;
let wordObj;
let currentTime;

function preload() {
  wordsArray = loadJSON('data/words_with_line_numbers.json');
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('IBM Plex Mono');
  currentTime = new Date().getTime();
  currentIndex = findInitialIndex(currentTime);
  if (currentIndex == -1) {
    wordObj = wordsArray[currentIndex];
    previousIndex = currentIndex - 1;
  }
}

function draw() {
  background('#F1F1F1');
  translate(width/2, height/2)
  fill(0);
  currentTime = new Date().getTime();

  if (currentIndex < wordsArray.length && currentTime > wordsArray[currentIndex].endTime) {
    currentIndex++;
  }

  if (currentIndex < wordsArray.length) {
    if (currentIndex != previousIndex) {
      wordObj = wordsArray[currentIndex];
      previousIndex = currentIndex;
    }
    
    if (currentTime >= wordObj.startTime && currentTime <= wordObj.endTime) {
    textSize(32);
    textAlign(CENTER, CENTER);
    text(wordObj.word,0,0)
    }
  }
}
