const socket = io();

socket.on("peer", function(data) {
  console.log(data);
});
