const socket = require("../app");
require("events").EventEmitter.prototype._maxListeners = 1000;
const aio = require("asterisk.io");

const io = socket.io;
ami = aio.ami("localhost", 5038, "admin", "admin");
ami.on("error", function(err) {
  throw err;
});
io.on("connection", function(socket) {
  ami.on("eventDialBegin", function(data) {
    socket.emit("peer", data);
  });
});
