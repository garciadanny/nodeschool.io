var net = require('net'),
  portNumber = process.argv[2];

////////////// Original Implementation //////////////

var server = net.createServer(function(socket) {
  // This cb is called every time a connection is received by the server.
  var time = getTime();
  // Writes to the socket, then closes it.
  socket.end(time);
});
server.listen(portNumber);

function getTime() {
  var dateObj = new Date();

  var year    = dateObj.getFullYear();
  var month   = getMonth(dateObj.getMonth());
  var day     = getDay(dateObj.getDate());
  var hour    = getHour(dateObj.getHours());
  var minute  = getMinute(dateObj.getMinutes());

  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
}

function getMonth(month) {
  month++;
  month = month.toString();
  if(month.length === 1) {
    month = '0' + month;
  }
  return month;
}

function getDay(day) {
  day = day.toString();
  if(day.length === 1) {
    day = '0' + day;
  }
  return day;
}

function getHour(hour) {
  hour = hour.toString();
  if(hour.length === 1) {
    hour = '0' + hour;
  }
  return hour;
}

function getMinute(min) {
  min = min.toString();
  if(min.length === 1) {
    min = '0' + min;
  }
  return min;
}

////////////// Improved Implementation //////////////

var server = net.createServer(function(socket) {
  socket.end(now() + '\n');
});
server.listen(portNumber);

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function now() {
  var date = new Date();
  return date.getFullYear() + '-'
  + zeroFill(date.getMonth() + 1) + '-'
  + zeroFill(date.getDate()) + ' '
  + zeroFill(date.getHours()) + ':'
  + zeroFill(date.getMinutes());
}