const http = require("http");

const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = "3000";

const server = http.createServer((req, res) => {
  console.log("Request for " + req.url + " by method " + req.method);
  if (req.url == "/") {
    res.statusCode = 200;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Respone in text");
  } else if (req.url == "/contactus") {
    res.statusCode = 200;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("<h1>Respone in Html</h1>");
  } else if (req.url == "/json") {
    res.statusCode = 200;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ name: "altaf shaikh" }));
  } else {
    res.statusCode = 404;
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
