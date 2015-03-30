var http = require('http'),
  fs = require('fs'),
  port = process.argv[2],
  fileLocation = process.argv[3];

// Request is used to fetch properties, such as
// the header and query-string from the request
// while response is for sending data to the client,
// both headers and body.
// Both request and response are also Node streams.
//
// The fs core module also has some streaming APIs for files.
// fs.createReadStream() creates a stream representing a file.
// The method returns a stream object which you can use src.pipe(dst)
// to pipe the data from the src stream to the dst stream.
// In this way you can connect a filesystem stream with an HTTP
// response stream.
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  var fileStreamObj = fs.createReadStream(fileLocation);
  fileStreamObj.pipe(res);
});
server.listen(port)