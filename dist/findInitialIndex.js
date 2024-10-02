"use strict";

function findInitialIndex(milliSinceStartOfDay) {
  for (var i = 0; i < wordsArray.length; i++) {
    if (milliSinceStartOfDay >= wordsArray[i].startTime && milliSinceStartOfDay <= wordsArray[i].endTime) {
      return i;
    }
  }
  return -1; // Return -1 if no matching word is found
}