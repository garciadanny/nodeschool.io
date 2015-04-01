var through = require('through2');

var transferStream  = through(write, end);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end() {
  this.push(null);
}

process.stdin.pipe(transferStream).pipe(process.stdout);

// Reference solution:

var through = require('through2');
var tr = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});
process.stdin.pipe(tr).pipe(process.stdout);