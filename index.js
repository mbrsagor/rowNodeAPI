const http = require('http');
const url = require('url');

const app = {};

// Configuraton
app.config = {
    port: 3000,
};

// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`The server is listening on ${app.config.port}`);
    });
};

// Handle requests response
app.handleReqRes = (req, res) => {
    // request Handle
    const parseURL = url.parse(req.url, true);
    const path = parseURL.pathname;
    // const trimPath = path.replace(/^|\//, '', )
    console.log(path);
    // Request response
    res.end('Hello there, New Node js server');
};

// Start the server
app.createServer();
