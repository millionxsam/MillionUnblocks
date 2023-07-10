import http from "http";
import nodeStatic from "node-static";
import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/bare/");
const serve = new nodeStatic.Server("static/");
const port = 3000;

const server = http.createServer();

server.on("request", (request, response) => {
  if (bare.shouldRoute(request)) {
    bare.routeRequest(request, response);
  } else {
    serve.serve(request, response);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen(process.env.PORT || port);
console.log(`Server listening on port ${port}`);
