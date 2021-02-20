const http = require('http');

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
    // Request response
    res.end('Hello there, New Node js server');
};

// Start the server
app.createServer();
