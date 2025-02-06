const { unlink } = require('node:fs/promises');
const path = require('node:path');


const filePath = path.join(__dirname, 'data', 'hello.txt');

(async function (path) {
  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})(filePath);