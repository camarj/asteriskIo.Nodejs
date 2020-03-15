const express = require("express");
const app = express();

const morgan = require("morgan");
const path = require("path");

// Settings
app.set("port", process.env.PORT || 3000);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Lavantando server
const server = app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

var io = require("socket.io")(server);
exports.io = io;
