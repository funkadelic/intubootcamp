module.exports = function(grunt) {

    grunt.initConfig({
        webServer: {
            rootFolder: "www",
            port: 8080
        }
    });

    grunt.registerTask("default", "start a web server", function(port) {
        var webserver = require("./webserver"),
            webServerConfig = grunt.config("webServer");

        this.async();

        webServerConfig.port = port || webServerConfig.port;

        webserver(webServerConfig, function() {
            grunt.log.writeln("web server listening on port " + webServerConfig.port);
        });

    });

};
