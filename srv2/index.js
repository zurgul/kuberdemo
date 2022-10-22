import http from "http";
import fetch from 'node-fetch';

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World from SRV 222 !");
};

const server = http.createServer(requestListener);
const url = `http://${process.env['srv1-url']}:8081`;

server.listen(8082, () => {
  console.log("Started SRV2, port 8082! 💡");
  console.log('env URL', process.env.URL);
  console.log('env srv1-url', process.env['srv1-url']);
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