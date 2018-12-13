var path = require('path');
var StaticServer = require('static-server');

var server = new StaticServer({
  rootPath: path.join(__dirname, '..', 'dist'),            // required, the root of the server file tree
  port: 1333,               // required, the port to listen
  name: 'cms-configurator-http-server',   // optional, will set "X-Powered-by" HTTP header
  host: '127.0.0.1',       // optional, defaults to any interface
  cors: '*',                // optional, defaults to undefined
  followSymlink: true,      // optional, defaults to a 404 error
  templates: {
    index: 'index.html',      // optional, defaults to 'index.html'
  }
});

server.start(function () {
  console.log('Server listening to', server.port);
});
