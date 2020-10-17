const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
//const logger = require('./middleware/logger');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

/*
const server = http.createServer((req,res) => {
    let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath,(err,content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) => {
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.end(content,'utf8');
                })
            } else {
                //some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            app.use(express.static(path.join(__dirname,'public')));
        }
    });
});
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server started on Port ${PORT}`));