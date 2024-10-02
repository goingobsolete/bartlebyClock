
let wordsArray;
let currentIndex;
let wordObj;

let group1, group2, group3, group4, group5;


// let currentTime;

function preload() {
  wordsArray = loadJSON('data/words_with_line_numbers.json', onWordJSONLoaded, onJSONError);
  group1 = loadJSON('data/group_1.json', onGroup1JSONLoaded, onJSONError);
  group2 = loadJSON('data/group_2.json', onGroup2JSONLoaded, onJSONError);
  group3 = loadJSON('data/group_3.json', onGroup3JSONLoaded, onJSONError);
  group4 = loadJSON('data/group_4.json', onGroup4JSONLoaded, onJSONError);
  group5 = loadJSON('data/group_5.json', onGroup5JSONLoaded, onJSONError);


} 

function onWordJSONLoaded(data) {
  console.log('Word Array JSON Loaded');
  wordsArray = data;
}

function onGroup1JSONLoaded(data) {
  console.log('Group 1 JSON Loaded');
  group1 = data;
}

function onGroup2JSONLoaded(data) {
  console.log('Group 2 JSON Loaded');
  group2 = data;
}

function onGroup3JSONLoaded(data) {
  console.log('Group 3 JSON Loaded');
  group3 = data;
}

function onGroup4JSONLoaded(data) {
  console.log('Group 4 JSON Loaded');
  group4 = data;
}

function onGroup5JSONLoaded(data) {
  console.log('Group 5 JSON Loaded');
  group5 = data;
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

