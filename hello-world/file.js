
// Import Node.js File System module
const fs = require('fs');
const os = require('os');

// =====================
// WRITE FILE (SYNC)
// =====================

// Creates or overwrites 'test.txt' with given content
// Blocking operation (Node.js waits until file is written)
// fs.writeFileSync('./hello-world/test.txt', 'hey tushal');


// =====================
// WRITE FILE (ASYNC)
// =====================

// Creates or overwrites file asynchronously (non-blocking)
// Callback runs after operation completes
// fs.writeFile('./hello-world/test.txt', 'hello world', (err) => {
//     if (err) console.log(err);
// });


// =====================
// READ FILE (SYNC)
// =====================

// Reads file content and returns it
// 'utf-8' converts buffer into readable text
// const result = fs.readFileSync("./hello-world/contact.txt", "utf-8");
// console.log(result);


// =====================
// READ FILE (ASYNC)
// =====================

// Reads file asynchronously
// Result comes inside callback
// fs.readFile("./hello-world/contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log(result);
//     }
// });


// =====================
// APPEND FILE (SYNC)
// =====================

// Adds content at the END of the file
// Date.now() adds current timestamp
// '\n' moves content to a new line
// fs.appendFileSync(
//     "./hello-world/test.txt",
//     `${Date.now()} hello tushal\n`
// );


// =====================
// COPY FILE (SYNC)
// =====================

// Copies test.txt into copy.txt
// fs.cpSync('./hello-world/test.txt', './hello-world/copy.txt');


// =====================
// DELETE FILE (SYNC)
// =====================

// Deletes copy.txt file
// fs.unlinkSync("./hello-world/copy.txt");


// =====================
// FILE INFO (STAT)
// =====================

// Gets file details (stats object)
// isFile() returns true if path is a file
// console.log(
//     fs.statSync("./hello-world/test.txt").isFile()
// );


// =====================
// CREATE FOLDERS
// =====================

// Creates nested folders
// { recursive: true } creates parent folders automatically
// my-docs → a → b → c
// fs.mkdirSync("my-docs/a/b/c", { recursive: true });

console.log(os.cpus().length);
