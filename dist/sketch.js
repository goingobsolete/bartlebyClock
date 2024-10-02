"use strict";

var wordsArray;
var currentIndex;
var wordObj;
// let currentTime;

function preload() {
  wordsArray = loadJSON('data/words_with_line_numbers.json', onJSONLoaded, onJSONError);
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
  var now = new Date();
  var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var milliSinceStartOfDay = now - startOfDay;
  console.log('millis:', milliSinceStartOfDay);
  currentIndex = findInitialIndex(milliSinceStartOfDay);
  console.log('Current Index:', currentIndex);
}
function draw() {
  background('#F1F1F1');
  translate(width / 2, height / 2);
  fill(0);
  var now = new Date();
  var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var milliSinceStartOfDay = now - startOfDay;
  currentTime = milliSinceStartOfDay;
  console.log('Current Time', currentTime);
  if (currentIndex < wordsArray.length) {
    if (currentTime > wordsArray[currentIndex].endTime) {
      currentIndex++;
    }
  }
  if (currentIndex < wordsArray.length) {
    var _wordObj = wordsArray[currentIndex];
    if (currentTime >= _wordObj.startTime && currentTime <= _wordObj.endTime) {
      text(_wordObj.word, 0, 0);
    }
  }
}