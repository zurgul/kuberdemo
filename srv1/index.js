import http from "http";
import fetch from "node-fetch";

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World from SRV 111 !");
};

const server = http.createServer(requestListener);
const url = `http://${process.env['srv2-url']}:8082`;

server.listen(8081, () => {
  console.log("Started SRV1, port 8081! 🚀");
  console.log('env srv2-url', process.env['srv2-url']);
  console.log('url', url);
});

async function ping() {
  try {
    const res = await fetch(url, {
      headers: {
        accept: "text/html",
        "cache-control": "no-cache",
        pragma: "no-cache",
      },
      method: "GET",
    });
    console.log(`[${url}]:`, await res.text());
  } catch (e) {
    console.error(`[${url}]:`, e.toString());
  }
}

setInterval(ping, 10000);
