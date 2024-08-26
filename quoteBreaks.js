const fs = require('fs');
const path = require('path');

// Expected directory path
const expectedDir = '/Users/papaya/Library/CloudStorage/Dropbox/02_Areas/github/bartlebyClock';

// Check if the current directory is correct
if (process.cwd() !== expectedDir) {
  console.error(`Current directory is not correct. Please navigate to ${expectedDir}`);
  process.exit(1);
}

// Step 1: Read the content of the text file
const inputFilePath = path.join(expectedDir, 'data', 'bartleby-txt.txt'); // Updated path
let content;
try {
  content = fs.readFileSync(inputFilePath, 'utf-8');
} catch (err) {
  console.error(`Error reading file at ${inputFilePath}:`, err.message);
  process.exit(1);
}

// Step 2: Process the content to add new lines based on the conditions specified
let result = '';
for (let i = 0; i < content.length; i++) {
  if (content[i] === '"') {
    if (i > 0 && content[i - 1] === ' ') {
      // Remove the space and add new lines after the space and after the quote
      result = result.slice(0, -1); // Remove the space
      result += '\n \n"';
    } else {
      // Add new lines before and after the quote
      result += '\n"';
    }
    result += '\n';
  } else {
    result += content[i];
  }
}

// Step 3: Write the modified content to a new text file
const outputFilePath = path.join(expectedDir, 'data', 'bartleby-txt-processed.txt'); // Updated path
try {
  fs.writeFileSync(outputFilePath, result, 'utf-8');
  console.log(`File updated successfully. Processed content written to ${outputFilePath}`);
  console.log(`Current directory: ${process.cwd()}`);
  console.log(`Input file path: ${inputFilePath}`);
  console.log(`Content read from file: ${content}`);
  // console.log(`Processed result: ${result}`);

} catch (err) {
  console.error(`Error writing file at ${outputFilePath}:`, err.message);
  process.exit(1);
}