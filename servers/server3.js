// TODO: Implement a simple Express sever and listen on port 3003
import express from "express";
const app = express();
const port = 3003;

app.get("/", (req, res) => {
	res.send("Handled by Server 3");
});

const server = app.listen(port, () => {
	console.log(`Server 3 is running at http://localhost:${port}`);
});

export { app, port, server };
