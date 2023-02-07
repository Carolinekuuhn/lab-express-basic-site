const { request } = require("express");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/info", (request, response) => {
  response.sendFile(__dirname + "/views/info.html");
});

app.get("/work", (request, response) => {
  response.sendFile(__dirname + "/views/work.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
