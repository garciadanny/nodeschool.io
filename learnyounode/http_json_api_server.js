var http = require('http'),
    url  = require('url'),
    port = process.argv[2];


function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time) {
  return { unixtime: time.getTime()}
}

var server = http.createServer(function(req, res) {
  if(req.method === 'GET') {
    var endpoint = url.parse(req.url, true);
    var query    = endpoint.query;
    var time     = new Date(query.iso);
    var response;

    if(endpoint.pathname === '/api/parsetime') {
      response = parseTime(time);
    }
    else if(endpoint.pathname === '/api/unixtime') {
      response = unixtime(time);
    }

    if(response) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    }
    else {
      res.writeHead(404);
      res.end('That endpoint does not exist!');
    }
  }
  else {
    res.writeHead(404);
    res.end('Must send a GET request!\n')
  }
});
server.listen(port);