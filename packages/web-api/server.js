var restify = require("restify");

var server = restify.createServer();
server.get("/", (req, res) => {
  res.send("server up!");
});

server.listen(8080, function () {
  console.log("%s listening at %s", server.name, server.url);
});
