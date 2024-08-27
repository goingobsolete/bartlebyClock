
let wordsArray;
let currentIndex;
let wordObj;

// let nFont; // narrator font
// let dFont; // dialogue font

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


  textSize(32);
  textAlign(CENTER, CENTER);
  text('Hello World',0,0)

    // Check if wordsArray is loaded before accessing it
  if (wordsArray) {
    console.log(wordsArray[467].word);
  } else {
    console.log("wordsArray is not loaded yet.");

  // let currentTime = new Date().getTime();

  // if (currentTime < wordsArray[0].startTime) {
  //   currentIndex = 0;
  // }

  // if (currentTime > wordsArray[currentIndex].endTime) {
  //   currentIndex++;
  // }

  // if (currentIndex < wordsArray.length) {
  //   let wordObj = wordsArray[currentIndex];
  //   if (currentTime >= wordObj.startTime && currentTime <= wordObj.endTime) {
  //     text(wordObj.word, 0, 0);
  //   }
  // }
}
