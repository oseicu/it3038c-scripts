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
    myServerUptime=os.uptime();
    myTotalMem=os.totalmem()/100000;
    myFreeMem=os.freemem();
    myCPU=os.cpus().length;
    html=`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Node JS Response</title>
    </head>
    <body>
      <p>Hostname: ${printResults()}</p>
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
server.listen(3001);

console.log("Server listening on port 3000");