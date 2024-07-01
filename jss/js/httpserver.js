// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        // handle root URL
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    } else if (req.url == "/student") {
        // handle '/student' URL
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    } else if (req.url == "/admin") {
        // handle '/admin' URL
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    } else {
        // handle all other URLs
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid Request!');
    }
});

// The server listens on port 5000
server.listen(5000);

console.log('Node.js web server at port 5000 is running..');
