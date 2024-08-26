const fs = require('fs');

// Step 1: Read the content of the text file
const filePath = 'data/bartleby-txt.txt';
let content = fs.readFileSync(filePath, 'utf-8');

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

// Step 3: Write the modified content back to the text file
fs.writeFileSync(filePath, result, 'utf-8');

console.log("File updated successfully.");