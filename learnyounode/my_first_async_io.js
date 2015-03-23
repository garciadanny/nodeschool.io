var fs = require('fs'),
  filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, contents) {
  if(err) {
    console.log(err);
    return;
  }
  var lines = contents.split(/\n/).length - 1;
  console.log(lines);
});