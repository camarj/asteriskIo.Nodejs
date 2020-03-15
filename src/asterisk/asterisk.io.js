const socket = require("../app");
require("events").EventEmitter.prototype._maxListeners = 1000;
const aio = require("asterisk.io");

const io = socket.io;
ami = aio.ami("test2.gosmartpbx.com", 5038, "admin", "vgetpa10");
ami.on("error", function(err) {
  throw err;
});
io.on("connection", function(socket) {
  ami.on("eventDialBegin", function(data) {
    socket.emit("peer", data);
  });
});
