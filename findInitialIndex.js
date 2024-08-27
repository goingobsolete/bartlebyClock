function findInitialIndex(currentTime) {
    for (let i = 0; i < wordsArray.length; i++) {
      if (currentTime >= wordsArray[i].startTime && currentTime <= wordsArray[i].endTime) {
        return i;
      }
    }
    return -1; // Return -1 if no matching word is found
  }