var fs = require('fs'),
  dirPath = process.argv[2],
  fileExt = process.argv[3];

//////// Original Solution ////////
fs.readdir(dirPath, function(err, list) {
  var result = [];
  list.map(function(fileName) {
    var regex = new RegExp('.' + fileExt + '$');
    if(regex.test(fileName)) {
       result.push(fileName)
    };
  });
  result.forEach(function(file) { console.log(file); });
});

//////// Improved Solution ////////
var path = require('path');

fs.readdir(dirPath, function(err, list) {
  list.forEach(function(file) {
    if(path.extname(file) === '.' + fileExt) {
      console.log(file);
    }
  });
});