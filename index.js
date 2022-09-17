//.*. web server using core NodeJs module http

// import http-web-server nodejs core package
const http = require('http');

// Create the web event handler
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');

});

// start the server
server.listen(3000);
console.log('Server running at http://localhost:3000');