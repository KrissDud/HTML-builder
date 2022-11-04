const fs = require('fs');
const readFile = fs.createReadStream('./01-read-file/text.txt')
readFile.on('data', chunk => console.log(chunk.toString()));
/*
const fs = require('fs');
const path = require('path');
fs.readFile(
    path.join(__dirname, 'text.txt'),
    'utf-8',
    (err, data) =>{
        if (err) throw err;
        console.log(data);
    }
);*/
