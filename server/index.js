const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const PORT = process.env.PORT || 4000;
const router = require("./router");

// public static files
app.use(express.static(__dirname + "/public"));

app.use(router);

// io.on("connection", (socket) => {
// 	socket.on("chat message", (msg) => {
// 		io.emit("chat message", msg);
// 	});
// });

server.listen(PORT, () => {
	console.log(`listening on  http://localhost:${PORT}/`);
});
