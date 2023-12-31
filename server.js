// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);
server.use(router);

// Listen to port
server.listen(4000, () => {
    console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;