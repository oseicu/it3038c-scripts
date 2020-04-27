// determining difference between two dates
var firstDate = new Date("Feb. 2, 2018, 12:00PM");
var secondDate = new Date("Apr. 4, 2005, 10:30AM");
     diff = 0
     days = 1000*60*60*24;

diff = firstDate - secondDate;

firstDate.getTime();
secondDate.getTime();

console.log(Math.floor(diff / days) + " days have passed since the start of the year. ");

var http = require("http");
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
      <p>Hostname: ${myHostName}</p>
      <p>IP: ${ip.address()}</p>
      <p>Server Uptime: ${myServerUptime}</p>
      <p>Total Memory: ${myTotalMem}</p>
      <p>Free Memory: ${myFreeMem}</p>
      <p>Number of CPUs: ${myCPU}</p>
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