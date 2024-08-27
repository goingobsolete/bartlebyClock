const fs = require('fs');

// Step 1: Read the content of the text file
const filePath = "data/bartleby-txt-sentences.txt";
const content = fs.readFileSync(filePath, 'utf-8');

// Step 2: Split content into lines
const lines = content.split('\n');

// Step 3: Initialize an array to store words with line numbers
const wordsWithLineNumbers = [];

// Step 4: Process each line
lines.forEach((line, lineNumber) => {
  // Regex to capture words with preceding and trailing punctuation
  const words = line.match(/[.,!?;'"()\w-]+(?:[.,!?;'"()]*)|(?:[.,!?;'"()]*)[.,!?;'"()\w-]+/g);
  if (words) {
    // Add each word and its line number to the array
    words.forEach(word => {
      wordsWithLineNumbers.push({ word, line: lineNumber + 1 });
    });
  }
});

// Step 5: Convert the array to JSON format
const jsonContent = JSON.stringify(wordsWithLineNumbers, null, 2);

// Step 6: Write the JSON content to a file
const outputFilePath = "data/words_with_line_numbers.json";
fs.writeFileSync(outputFilePath, jsonContent, 'utf-8');

console.log(`Data has been written to ${outputFilePath}`);
