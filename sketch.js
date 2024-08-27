
let wordsArray;
let currentIndex = 0;
let wordObj;
let currentTime;

function preload() {
  wordsArray = loadJSON('data/words_with_line_numbers.json', onJSONLoaded, onJSONError);
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('IBM Plex Mono');
  textSize(32);
  textAlign(CENTER, CENTER);

  currentTime = new Date().getTime();

  currentIndex = findInitialIndex(currentTime);

}

function draw() {
  background('#F1F1F1');
  translate(width/2, height/2)
  fill(0);

  currentTime = new Date().getTime();

  if (currentIndex < wordsArray.length) {
    if(currentTime > wordsArray[currentIndex].endTime) {
      currentIndex++;
    }
  }

  if (currentIndex < wordsArray.length) {
      let wordObj = wordsArray[currentIndex];
      if (currentTime >= wordObj.startTime && currentTime <= wordObj.endTime) {
        text(wordObj.word,0,0)
      }
    }
  }

