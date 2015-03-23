var fs = require('fs'),
  path = require('path');

module.exports = function(dirPath, fileExt, cb) {
  var result;

  fs.readdir(dirPath, function(err, list) {
    if(err) {
      return cb(err);
    }

    result = list.filter(function(file) {
      return path.extname(file) === '.' + fileExt;
    });
    
    cb(null, result)
  });
};