
let wordsArray;
let currentIndex = 0;
let previousIndex = -1;
let wordObj;

function preload() {
  wordsArray = loadJSON('data/words_with_line_numbers.json');
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('IBM Plex Mono');

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
      previousIndex = currentIndex
      wordObj = wordsArray[currentIndex];
    }
    
    if (currentTime >= wordObj.startTime && currentTime <= wordObj.endTime) {
    textSize(32);
    textAlign(CENTER, CENTER);
    text(wordObj.word,0,0)
    }
  }
}

  // wordObj = wordsArray[300];

  // textSize(32);
  // textAlign(CENTER, CENTER);
  // text(wordObj.word,0,0)

  // if (currentTime > wordsArray[currentIndex].endTime) {
  //   currentIndex++;
  // }

  // if (currentIndex < wordsArray.length) {
  //   let wordObj = wordsArray[currentIndex];
  //   if (currentTime >= wordObj.startTime && currentTime <= wordObj.endTime) {
  //     text(wordObj.word, 0, 0);
  //   }
  // }