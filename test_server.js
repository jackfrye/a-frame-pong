var https = require('https');
var fs = require('fs');

var options = {
    pfx: fs.readFileSync('/home/jfrye/cert.pfx'),
    passphrase: 'password'
};

var server = https.createServer(options, function (req, res) {
    console.log("request received");
    console.log(req.url);

    if(req.url == "/")
    {
        console.log("empty url, serving index");
        fs.readFile('./src/index.html', function (error, data) {
            res.end(data);
        })
    }
    else
    {
        fs.readFile('./src/' + req.url, function (error, data) {
            res.end(data);
         })
    }
}).listen(12345, '0.0.0.0', function(){
    console.log('server running');
});
