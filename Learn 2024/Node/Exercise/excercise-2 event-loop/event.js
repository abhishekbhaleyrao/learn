const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the home page!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About us page.\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found!");
  }
});

// Listening for the 'request' event
server.on("request", (req, res) => {
  console.log(`Request received for URL: ${req.url}`);
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
/* Output:
    Server running on port 3000
    (After Opening browser with url localhost:3000)
    Request received for URL: /
    Request received for URL: /favicon.ico
  */
