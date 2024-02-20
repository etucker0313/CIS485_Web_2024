
//Testing Nodes
//const fs = require ('fs');
//fs.writeFileSync('test.txt', 'Hello,world!');

//HTTP
/*const http = require ('node:http');

const server = http.createServer((req, res) =>{
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end ('This is Exaviana Tucker!\n');
});

const PORT = 3000;

server.listen (PORT,() => {
    console.log ('Server running at http://localhost:${PORT}/');
}); */

// EXPRESS
const express = require('express');

const app = express();
const PORT = 3000;

// Route for Root Path
app.get('/', (req, res) =>{
    res.send ('Hello world, this is Exaviana Tucker!\n');
});

// Route for "/api/items"
app.get ('/api/items',(req, res) =>{
    res.json({ message: 'API endpoint for items.'});
});
app.listen (PORT,() => {
    console.log (`Server running at http://localhost:${PORT}/`);
});