const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
   if(req.url==='/favicon.ico') return res.end(); 
   const log = `${Date.now()}:${req.method}  ${req.url}New Req Received\n`;
   const myUrl = url.parse(req.url,true);
   // console.log(myUrl);
   
   fs.appendFile('./02_basics/log.txt',log,(err,data)=>{
      switch(myUrl.pathname){
         case '/': 
         if(req.method==='GET') res.end("Home Page");
         break;
         case '/about': res.end("About Page");
         break;
         case '/search':
            const search = myUrl.query.search_query;
            res.end("You searched for "+ search);
         break;
         case '/contact':
         const username = myUrl.query.myname;   
         res.end(`hello , ${username}`);
         break;
         case '/signup':
         if(req.method==='GET') res.end("Signup Page");
         else if(req.method==='POST') res.end("Sucess");
         default: res.end("404 Page Not Found"); 
      }
      
   })
});


myServer.listen(4000, () => console.log("Server Started on port 4000"));