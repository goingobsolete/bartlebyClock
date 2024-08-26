const fs = require('fs');

// Step 1: Read the content of the text file
const filePath = 'bartleby-txt.txt';
let content = fs.readFileSync(filePath, 'utf-8');

// Step 2: Process the content to add new lines before the first quotation and after the second quotation
let result = '';
let insideQuote = false;
for (let i = 0; i < content.length; i++) {
  if (content[i] === '"') {
    if (!insideQuote) {
      result += '\n"';
      insideQuote = true;
    } else {
      result += '"\n';
      insideQuote = false;
    }
  } else {
    result += content[i];
  }
}

// Step 3: Write the modified content back to the text file
fs.writeFileSync(filePath, result, 'utf-8');

console.log("File updated successfully.");