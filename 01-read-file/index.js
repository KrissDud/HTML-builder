const fs = require('fs');
const readFile = fs.createReadStream('./01-read-file/text.txt')
readFile.on('data', chunk => console.log(chunk.toString())); 

