var http = require('http');
var urls = process.argv.slice(2);

var results = [];

urls.forEach(function(url) {
  var urlOrder = urls.indexOf(url);

  http.get(url, function(response) {
    var responseContents = '';

    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      responseContents += chunk
    });
    response.on('end', function() {
      results.splice(urlOrder, 0, responseContents);
      if(results.length === 3) {
        results.forEach(function(content) {
          console.log(content);
        });
      }
    });
  });
});

