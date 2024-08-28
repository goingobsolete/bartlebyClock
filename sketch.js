
let wordsArray;
let currentIndex;
let wordObj;
// let currentTime;

function preload() {
  wordsArray = loadJSON('data/words_with_line_numbers.json');
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('IBM Plex Mono');
  textSize(32);
  textAlign(CENTER, CENTER);

  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const milliSinceStartOfDay = now - startOfDay;

  console.log('millis:',milliSinceStartOfDay);

  currentIndex = findInitialIndex(milliSinceStartOfDay);

  console.log('Current Index:',currentIndex);
}

function draw() {
  background('#F1F1F1');
  translate(width/2, height/2)
  fill(0);

  currentTime = 968782;

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

