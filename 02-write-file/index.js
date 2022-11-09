const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('node:process');
const process = require('process');
const readline = require('readline');
const text = require('stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.writeFile(
    path.join(__dirname, 'text.txt'),
    'Я созданный вами текстовый файл!',
    (err) => {
        if (err) throw err;
    },
    rl.question('Введите текст: ',
    (err, text)=> {
})
);
rl.on('SIGINT', () =>{
stdout.write('Успехов в обучении! Пока!');
process.exit();
});
