import http from 'http';
import nodeStatic from 'node-static';


const serve = new nodeStatic.Server('static/');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {
  serve.serve(request, response);
});

server.on('upgrade', (req, socket, head) => {
  socket.end();
});

server.listen(process.env.PORT || port);
console.log(`Server listening on port ${port}`);