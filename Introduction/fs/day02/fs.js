// const { unlinkSync } = require('node:fs');
const { open } = require('node:fs/promises');


const path = './tmp/hello';

// unlink(path, function (err) {
//   if (err) throw err;

//   console.log('successfuly deleted ', path);
// });

// try {
//   unlinkSync(path);
//   console.log('successfully deleted ', path);
// } catch (error) {
//   console.log(error);
// }

let fileHandle;

(async function () {
  try {
    fileHandle = await open('hello.txt', 'r');
  } catch (error) {
    await fileHandle?.close();
  }
})

