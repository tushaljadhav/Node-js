const http = require('http');
const express = require('express');

 const app = express();

 app.get('/', (req, res) => {
   return res.send('Home Page');
});

app.get('/about', (req, res) => {
   return res.send(`Hello ${req.query.name}`);
});

app.listen(8000, () => console.log('Server Started on port 8000'));

// const myServer = http.createServer(app);

// myServer.listen(4000, () => console.log("Server Started on port 4000"));