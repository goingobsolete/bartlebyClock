const fs = require('fs');
const path = require('path');

// Expected directory path
const expectedDir = '/Users/papaya/Library/CloudStorage/Dropbox/02_Areas/github/bartlebyClock';

// Check if the current directory is correct
if (process.cwd() !== expectedDir) {
  console.error(`Current directory is not correct. Please navigate to ${expectedDir}`);
  process.exit(1);
}

// Define input and output file paths
const inputFilePath = path.join(expectedDir, 'data', 'bartleby-txt.txt'); // Input file path
const outputFilePath = path.join(expectedDir, 'data', 'bartleby-txt-processed.txt'); // Output file path

// Function to add new lines around quotation marks
function addNewLinesAroundQuotes(content) {
  // Replace each “ with \n“ (new line before the quote)
  // Replace each ” with ”\n (new line after the quote)
  return content
    .replace(/“/g, '\n“')
    .replace(/”/g, '”\n');
}

// Read the content of the file
let content;
try {
  content = fs.readFileSync(inputFilePath, 'utf-8');
} catch (err) {
  console.error(`Error reading file at ${inputFilePath}:`, err.message);
  process.exit(1);
}

// Process the content
const result = addNewLinesAroundQuotes(content);

// Write the modified content to a new file
try {
  fs.writeFileSync(outputFilePath, result, 'utf-8');
  console.log(`File updated successfully. Processed content written to ${outputFilePath}`);
} catch (err) {
  console.error(`Error writing file at ${outputFilePath}:`, err.message);
  process.exit(1);
}
