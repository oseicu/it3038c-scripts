var http = require("http");
var fs = require("fs");
var os = require("os");
var ip = require("ip");

//display age in millisseconds, days, hours, seconds, minute, year
var DOB = "March 30, 1995";

var millisecondsBetweenDOBAnd1980 = Date.parse(DOB);
var millisecondsBetweenNowAnd1980 = Date.now(DOB);
var ageInmilliseconds = millisecondsBetweenNowAnd1980-millisecondsBetweenDOBAnd1980;

var milliseconds = ageInmilliseconds;
var second = 1000;
var minute = second*60;
var hour = minute*60;
var day = hour*24;
var month = day*30;
var year = month*365;

//let age conversion begin
var years = Math.round(milliseconds/year);
var months = years*12;
var days = years*365;
var hours = Math.round(milliseconds/hour);
var seconds = Math.round(milliseconds/seconds);

function printResults(){
    var message = "Age in Years : "+years+
    "</br>Age in Months : "+months+
    "</br>Age in Days : "+days+
    "</br>Age in Hours : "+hours+
    "</br>Age in Seconds : "+seconds+
    "</br>Age in Milliseconds : "+milliseconds
return message
}
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