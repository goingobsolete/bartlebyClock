
let wordsArray;
let currentIndex;
let wordObj;
let group1, group2, group3, group4, group5;


// let currentTime;

function preload() {
  loadJSON('data/words_with_line_numbers.json', onWordsLoaded, onJSONError);
  loadJSON('data/group1.json', onGroup1Loaded, onJSONError);
  loadJSON('data/group2.json', onGroup2Loaded, onJSONError);
  loadJSON('data/group3.json', onGroup3Loaded, onJSONError);
  loadJSON('data/group4.json', onGroup4Loaded, onJSONError);
  loadJSON('data/group5.json', onGroup5Loaded, onJSONError);
} 

function onWordsLoaded(data) {
  console.log('Words JSON Loaded');
  wordsArray = data;
}

function onGroup1Loaded(data) {
  console.log('Group 1 JSON Loaded');
  group1 = data;
}

function onGroup2Loaded(data) {
  console.log('Group 2 JSON Loaded');
  group2 = data;
}

function onGroup3Loaded(data) {
  console.log('Group 3 JSON Loaded');
  group3 = data;
}

function onGroup4Loaded(data) {
  console.log('Group 4 JSON Loaded');
  group4 = data;
}

function onGroup5Loaded(data) {
  console.log('Group 5 JSON Loaded');
  group5 = data;
}

function onJSONError(error) {
  console.error('Error loading JSON:', error);
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

