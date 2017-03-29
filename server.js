const express = require('express');
const http = require('http');
const path = require('path');
const appServer = express();
const port = 8081;

appServer.use(express.static(path.join(__dirname, 'public')));

appServer.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

http.createServer(appServer).listen(port, function() {
    console.log(`Express server listening on port ${port}`);
});
