var consoleInput = process.argv;
var sum = 0;

consoleInput.splice(0,2);

for (i = 0; i < consoleInput.length; i++) {
  sum += Number(consoleInput[i]);
};

console.log(sum);
