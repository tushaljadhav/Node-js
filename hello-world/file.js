const { log } = require('console');
const fs = require('fs');
// Sync...
// fs.writeFileSync('./hello-world/test.txt','hey tushal')

// // Async...
// fs.writeFile('./hello-world/test.txt','hello world',(err)=>{})

// const result = fs.readFileSync("./hello-world/contact.txt","utf-8")
// console.log(result);

// fs.readFile("./hello-world/contact.txt","utf-8", (err,result)=>{
//     if(err){
//         console.log("error", err);
        
//     }
//     else{
//         console.log(result);
        
//     }
// })


fs.appendFileSync("./hello-world/test.txt",`${Date.now()}hello tushal\n`)

// fs.cpSync('./hello-world/test.txt','./hello-world/copy.txt')

// fs.unlinkSync("./hello-world/copy.txt")

console.log(fs.statSync("./hello-world/test.txt").isFile());


fs.mkdirSync("my-docs/a/b/c",{recursive:true})