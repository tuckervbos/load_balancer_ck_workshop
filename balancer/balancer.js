import http from "http";
import httpProxy from "http-proxy";

const proxy = httpProxy.createProxyServer({});
// const servers = [
// 	"http://localhost:3001",
// 	"http://localhost:3002",
// 	"http://localhost:3003",
// ];
// let i = 0;

const servers = [
	{ target: "http://localhost:3001", activeRequests: 0 },
	{ target: "http://localhost:3002", activeRequests: 0 },
	{ target: "http://localhost:3003", activeRequests: 0 },
];

const server = http.createServer((req, res) => {
	// TODO: Implement Round-Robin Load Balancing Strategy
	// select target server with our strategy
	// print to console target server url
	// proxy the request over to the target server
	// ---
	// const target = servers[i % servers.length];
	// i++;
	// console.log(`Routing to: ${target}`);
	// proxy.web(req, res, { target });
	// ---
	// TODO: Implement Connection Based Load Balancing Strategy
	// keep counter for activeRequests on each server
	// route incoming requests to server with fewest active requests
	// increment counter when a request starts, decrement when finishes
	// (hint: res.on("finish", () => {
	// execute code in here when a request finishes
	//}))
	// ---
	// pick server with fewest active requests
	const targetServer = servers.reduce((prev, curr) =>
		prev.activeRequests <= curr.activeRequests ? prev : curr
	);
	console.log(targetServer);
	targetServer.activeRequests++;
	proxy.web(req, res, {
		target: targetServer.target,
		activeRequests: targetServer.activeRequests,
	});
	res.on("finish", () => {
		targetServer.activeRequests--;
	});
});

server.listen(8000, () => {
	console.log("Load balancer listening on port 8000");
});
