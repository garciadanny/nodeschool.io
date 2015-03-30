var http      = require('http'),
    port      = process.argv[2],
    util      = require('util'),
    Transform = require('stream').Transform;

// Transform stream object that converts input data
// to upper-case.
util.inherits(UpperCaserer, Transform);

function UpperCaserer(options) {
  if (!(this instanceof UpperCaserer)) {
    return new UpperCaserer(options);
  }
  Transform.call(this, options);
}

UpperCaserer.prototype._transform = function(chunk, encoding, done) {
  this.push( chunk.toString().toUpperCase() );
  done();
}

// HTTP server
var server = http.createServer(function(req, res) {
  if(req.method != 'POST') {
    return res.end('Must send a POST request!\n');
  }
  var uppercaserer = new UpperCaserer();
  req.pipe(uppercaserer).pipe(res);
});
server.listen(port);




