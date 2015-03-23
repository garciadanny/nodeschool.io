var http = require('http'),
  url = process.argv[2];

///////// Original Solution /////////
var result = '';

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', collectData);
  response.on('end', outputData);
});

function collectData(chunk) {
  result += chunk;
}

function outputData() {
  console.log(result.length);
  console.log(result);
}

///////// buffer list Solution /////////
var bl = require('bl')

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    if(err) {
      return console.error(err);
    }
    data = data.toString()
    console.log(data.length);
    console.log(data);
  }));
});