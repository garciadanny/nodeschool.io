var myModule = require('./make_it_modular'),
  dirPath = process.argv[2],
  fileExt = process.argv[3];

myModule(dirPath, fileExt, function(err, list) {
  if(err) {
    return console.error('There was an error: ', err)
  }
  list.forEach(function(file) {
    console.log(file)
  });
});