
let wordsArray;
let currentIndex;
let wordObj;

let bgImage;
let resizedBgImage;

// let currentTime;

function preload() {
  wordsArray = loadJSON('data/words_with_line_numbers.json', onJSONLoaded, onJSONError);
  bgImage = loadImage('assets/stock-paper-texture-00081.jpg');
} 

function onJSONLoaded(data) {
  console.log('JSON Loaded');
  wordsArray = data;
}

function onJSONError() {
  console.error('Failed to load JSON file.');
}

function setup() {
  createCanvas(windowWidth, windowHeight); //TODO: if window is larger than bgImage, canvas should be bgImage size and canvas should be centered
  textFont('Libre Caslon Text');
  textStyle(ITALIC);
  textSize(72);
  textAlign(CENTER, CENTER);

  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const milliSinceStartOfDay = now - startOfDay;

  console.log('millis:',milliSinceStartOfDay);
  currentIndex = findInitialIndex(milliSinceStartOfDay);
  console.log('Current Index:',currentIndex);

  resizedBgImage = resizeImage(bgImage, windowWidth, windowHeight);

}

function draw() {
  background(255);
  image(resizedBgImage, 0, 0, windowWidth, windowHeight);
  translate(width/2, height/2)
  fill(0);

  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const milliSinceStartOfDay = now - startOfDay;
  currentTime = milliSinceStartOfDay;

  console.log('Current Time',currentTime);

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

