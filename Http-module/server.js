const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page');
    } 
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>About Page my name is </h1>");
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
