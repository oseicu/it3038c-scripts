//display age in millisseconds, days, hours, seconds, minute, year
var DOB = "March 30, 1995";

var millisecondsBetweenDOBAnd1980 = Date.parse(DOB);
var millisecondsBetweenNowAnd1980 = Date.now(DOB);
var ageInMilliseconds = milliscondsBetweenNowAnd1980-millisecondsBetweenDOBAnd1980;

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
    "</br>Age in Milliseconds : "+milliseconds+
   document.getElementById('placeholder').innerHTML = message;
}

window.onload = printResults;

