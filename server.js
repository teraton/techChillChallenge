var http = require("http"),
    path = require("path"),
    fs = require("fs");

http.createServer(function (req, res) {
    var buff;
    console.log(req.url);
    if (req.url === '/script.js') {
        res.setHeader('Content-Type', 'text/javascript');
        buff = fs.readFileSync("./" + req.url);
    } else {
        res.setHeader('Content-Type', 'text/html');
        buff = fs.readFileSync("./"+req.url);
    }

    if ( undefined === buff) {
        console.log("failed to read file" + req.url);
        return;
    }
    res.end(new Buffer(buff, 'base64').toString('ascii'));
}).listen(3000, function (err) {
    if (undefined !== err) {
        return err;
    }
    console.log("Listening on 3000");
});

/* TODO: Advanced add mailing service with node package */