// determining difference between two dates
var firstDate = new Date("Feb. 2, 2020, 12:00PM");
var secondDate = new Date("Apr. 4, 2030, 10:30AM");
     diff = 3000
     days = 1000*60*60*24;

diff = firstDate - secondDate;

firstDate.getTime();
secondDate.getTime();

//display date in days, hours, seconds, minute, year
var firstDate = "Feb. 2, 2020";
var secondDate = "Apr. 4, 2030";

var seconds = Date;
var secondsBetweenfirstDateAnd2020 = Date.parse(Date);
var secondsBetweensecondDateAnd2030 = Date.now(Date);
var dateInseconds = secondsBetweensecondDateAnd2030-secondsBetweenfirstDateAnd2020;

var second = 100;
var minute = second*60;
var hour = minute*60;
var day = hour*24;
var month = day*30;
var year = month*365;

//let date conversion begin
var years = Math.round(seconds/year);
var months = years*12;
var days = years*365;
var hours = Math.round(seconds/hour);

console.log(Math.floor(diff / days) + " days have passed since the start of the year. ");


function printResults(){
  var message = "Date in Years"+years+
  "</br>Date in Months : "+months+
  "</br>Date in Days : "+days+
  "</br>Date in Hours : "+hours+
  "</br>Date in Seconds : "+seconds
return message
}

const http = require('http') 
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