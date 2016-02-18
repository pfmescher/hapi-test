var Hapi = require("hapi"),
    config = require("./config");

var server = new Hapi.Server({});

server.connection(config.connection);

server.start(function(){
    console.log('Server running at:', server.info.uri);
});