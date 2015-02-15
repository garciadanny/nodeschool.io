var fs = require('fs'),
    filePath = process.argv[2];

var contents = fs.readFileSync(filePath, 'utf8')
var lines = contents.split(/\n/).length - 1;

console.log(lines);
