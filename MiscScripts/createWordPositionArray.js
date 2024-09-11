const fs = require('fs');

// Step 1: Read the content of the text file
const filePath = "data/bartleby-txt.txt";
const content = fs.readFileSync(filePath, 'utf-8');

// Step 2: Use a regular expression to split the content into words, including punctuation
const wordsArray = content.match(/\S+/g);

// Step 3: Log the resulting array of words
console.log(wordsArray);