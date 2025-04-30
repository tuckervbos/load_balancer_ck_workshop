// import express
// instantiate a new express app
// create a / route
// have the / route send the message "Handled by server A"
// have it listen on port 3001

// TODO: Implement a simple Express sever and listen on port 3001
import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
	res.send("Handled by Server 1");
});

const server = app.listen(port, () => {
	console.log(`Server 1 is running at http://localhost:${port}`);
});

export { app, port, server };
