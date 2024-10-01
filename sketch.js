
let wordsArray;
let currentIndex;
let wordObj;
let group1,group2, group3, group4, groupWall;


// let currentTime;

function preload() {
  wordsArray = loadJSON('data/words_with_line_numbers.json', onJSONLoaded, onJSONError);
  group1 = loadJSON('data/group1.json', onJSONLoaded, onJSONError);
  group2 = loadJSON('data/group2.json', onJSONLoaded, onJSONError);
  group3 = loadJSON('data/group3.json', onJSONLoaded, onJSONError);
  group4 = loadJSON('data/group4.json', onJSONLoaded, onJSONError);
} 

function onJSONLoaded(data) {
  console.log('JSON Loaded');
  wordsArray = data;
}

function onJSONError() {
  console.error('Failed to load JSON file.');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
}

function draw() {
  background('#F1F1F1');
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

