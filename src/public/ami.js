const socket = io();

socket.on("peer", function(data) {
  console.log(data);
  render(data);
  $("#staticBackdrop").modal("show");
});

function render(data) {
  var html = `<div>
  <h2>Recibiendo llamada del numero:</h2>
  <h3>${data.CallerIDName}</h3>
  <h3>${data.CallerIDNum}</h3>
  </div>`;

  document.getElementById("messages").innerHTML = html;
}
