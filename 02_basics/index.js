const http = require('http');

const myServer = http.createServer((req, res) => {
   console.log(req);
   res.end("Hello from Node.js Server agian!");
});


myServer.listen(3000, () => console.log("Server Started on port 3000"));