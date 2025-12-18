const http = require("http")
const fs = require("fs")


const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url}New Req Received\n`
    fs.appendFile('./01_basics/log.txt',log, (err,data)=>{
        switch (req.url) {
            case "/":
                res.end('Hello From Server')
                
                break;
            case "/about":
                res.end('This is About Page')
                break;
            case "/contact":
                res.end('This is Contact Page')
                break;
        
            default:
                break;
                res.end('404 Page Not Found')
        }
        
        res.end('Hello From Server again') 

    })
})

myServer.listen(5000,()=> console.log('Server Started!'))