import http from "http";
import url from "url";


http
  .createServer(function (req, res) {
    const parseUrl = url.parse(req.url, true);
    var pathname = url.parse(req.url).pathname;
    if(parseUrl.pathname === "/" && req.method ==="GET" )
    res.writeHead(200, { Location: "http://w3docs.com/" + pathname });
    res.end();
  })
  .listen(8888);
