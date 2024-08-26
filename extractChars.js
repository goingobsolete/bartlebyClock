// extractChars.js
const fs = require('fs');

// Step 1: Read the content of the text file
const filePath = "data/bartleby-txt.txt";
const content = fs.readFileSync(filePath, 'utf-8');

// Step 2: Extract all unique characters from the content
const uniqueChars = new Set(content);

// Step 3: Convert the Set to an array and log the list of unique characters
const uniqueCharsArray = Array.from(uniqueChars);
console.log(uniqueCharsArray);