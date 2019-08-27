const app = require('./lib/app');
const http = require('http');
const { port } = require('./config');
const server = http.createServer(app);
require('./lib/db');

server.listen(port, () => {
  console.log('server is running on', server.address());
});
