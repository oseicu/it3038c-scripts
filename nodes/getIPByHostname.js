var dns = require("dns");

function hostnameLookup(hostname) {
    dns.lookup(hostname, function(err, addresses, family) {
        console.log(addresses);
    });
}



if (ProcessingInstruction.argv.length <= 2){
    console.log("USAGE: node "+ __filename + "hostname.com")
    ProcessingInstruction.exit(-1)

}

var ip = process.argv[2]

console.log(`Checking IP of ${hostname}`)
