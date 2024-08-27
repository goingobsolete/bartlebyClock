const fs = require('fs');
const path = require('path');

// Expected directory path
const expectedDir = '/Users/papaya/Library/CloudStorage/Dropbox/02_Areas/github/bartlebyClock';

// Check if the current directory is correct
if (process.cwd() !== expectedDir) {
  console.error(`Current directory is not correct. Please navigate to ${expectedDir}`);
  process.exit(1);
}

// Step 1: Read the JSON file
const jsonFilePath = path.join(expectedDir, 'data', 'words_with_line_numbers.json');
let wordsArray;
try {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
  wordsArray = JSON.parse(jsonData);
} catch (err) {
  console.error(`Error reading or parsing JSON file at ${jsonFilePath}:`, err.message);
  process.exit(1);
}

// Step 2: Calculate the number of objects in the array
const numberOfWords = wordsArray.length;

// Step 3: Divide 86,400,000 milliseconds by the number of objects to get the time interval for each word
const millisecondsInADay = 86400000;
const timeInterval = millisecondsInADay / numberOfWords;

// Step 4: Add start and end times to each word's object
let currentTime = 0;
wordsArray = wordsArray.map(wordObj => {
  const startTime = currentTime;
  const endTime = currentTime + timeInterval - 1;
  currentTime = endTime + 1;
  return {
    ...wordObj,
    startTime: startTime,
    endTime: endTime
  };
});

// Log the result to verify
console.log(wordsArray.slice(0, 10)); // Log the first 10 objects to verify

// Step 5: Save the updated array back to the JSON file
const updatedJsonData = JSON.stringify(wordsArray, null, 2);
try {
  fs.writeFileSync(jsonFilePath, updatedJsonData, 'utf-8');
  console.log(`File updated successfully. Processed content written to ${jsonFilePath}`);
} catch (err) {
  console.error(`Error writing file at ${jsonFilePath}:`, err.message);
  process.exit(1);
}