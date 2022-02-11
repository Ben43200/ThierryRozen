require("dotenv").config();
const server = require("gbackend");

//lance le serveur http
server.set({
  "cache": 0,
  "errorPage": "errorPage",
  "indexPage": "index",
  "logErrors": true
});
server.listen(parseInt(process.env.HTTP_PORT));
console.clear();
console.log(`serveur http://localhost:${process.env.HTTP_PORT} [OK]`);