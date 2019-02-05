const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const text = buffer.toString();
const array = text.split('\n');
console.log(array.length-1);