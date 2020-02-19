var http = require("http");
var fs = require("fs");
var os = require("os");
var ip = require("ip");

var server = http.createServer(function(req, res){
    if(req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8", function(err, body){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(body);
       
    });
}
  else if (req.url.match("/sysinfo")){
    myHostName=os.hostname();
    myTotalMem=os.totalmem()/1000;
    html=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Node JS Response</title>
    </head>
    <body>
      <p>Hostname: ${myHostName}</p>
      <p>IP: ${ip.address()}</p>
      <p>Server Uptime:</p>
      <p>Total Memory: ${myTotalMem}</p>
      <p>Free Memory:</p>
      <p>Number of CPUs:</p>
    </body>
    </html>`
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
}
else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end(`404 File Not Found at ${req.url}`);
  }
})
server.listen(3000);

console.log("Server listening on port 3000");