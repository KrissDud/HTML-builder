const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('node:process');
const process = require('process');
const readline = require('readline');
const { text }= require('stream/consumers');
const { exit } = require('process');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const info = rl.question('Введите ваше имя:', answer1 => {
    rl.question('Введите какой-нибудь текст: ', answer2 => {
        rl.question('И еще что-нибудь: ', answer3 => {
            fs.appendFile(
                path.join(__dirname, 'text.txt'),
                (answer1+','+answer2+','+answer3),
                err => {
                    if (err) throw err;
                    console.log('Файл был изменен');
                }
            );
    });
  });
});
fs.writeFile(
    path.join(__dirname, 'text.txt'),
    'Я созданный вами файл!',
    (err) => {
        if (err) throw err;
    }
);
rl.on('SIGINT', () =>{
stdout.write('Успехов в обучении! Пока!');
process.exit();
});

