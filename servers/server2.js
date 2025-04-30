// TODO: Implement a simple Express sever and listen on port 3002
import express from "express";
const app = express();
const port = 3002;

app.get("/", (req, res) => {
	res.send("Handled by Server 2");
});

const server = app.listen(port, () => {
	console.log(`Server 2 is running at http://localhost:${port}`);
});

export { app, port, server };
