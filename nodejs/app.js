const http = require("http");

const routes = require('./routes')
const server = http.createServer(routes.handler);
console.log(routes.someText);
console.log('testing..3')

server.listen(3000);
