module.exports = function(webserverConfig, webserverCallback) {

    var http = require("http"),
        express = require("express"),
        app = express();

    app.use(express.static(webserverConfig.rootFolder));

    http.createServer(app).listen(webserverConfig.port, webserverCallback);

};
