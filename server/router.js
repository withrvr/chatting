const PORT = 4000;
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	// res.send({ response: "Chatting Server is running properly" }).status(200);
	res.sendFile(__dirname + "/index.html");
});

module.exports = router;
