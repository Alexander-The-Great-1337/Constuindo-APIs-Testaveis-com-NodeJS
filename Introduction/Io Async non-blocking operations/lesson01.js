const fs = require('node:fs');
const path = require('node:path');

let fileContent;

const someMath = 1 + 1;
const filePath = path.resolve(__dirname, "../data/big-file.txt");

fs.readFile(filePath, "utf8", function (err, content) {
  if (err) {
    return console.log(err);
  }
  console.log(content);
});

try {
  fileContent = fs.readFileSync(filePath, 'utf8');
  console.log('file has been read');
} catch (error) {
  console.log(error);
}

const text = `The sum is ${someMath}`;

console.log(text);