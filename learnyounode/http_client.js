var http = require('http'),
  url = process.argv[2];

// NOTES
// Unlike other callback functions, the callback passed into http.get()
// only takes one parameter (response), which is a Node Stream object.
// You can treat streams as objects that emit events, the 3 events
// that are of most interest are 'data', 'error', and 'end'.
// You listen to an event like so:
// `respnose.on('data', function(data) {/*...*/})
// This response object also has a setEncoding() function.
// When called with 'utf8', the data events will emit strings
// instead of Buffer objects which you explicitly have
// to convert to strings.
//


//////// Original Solution ////////
http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    console.log(data);
  })
});

//////// Improved Solution ////////
http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
});