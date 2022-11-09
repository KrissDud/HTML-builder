const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, {withFileTypes: true}, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
        if (file.isFile()){

    fs.stat(path.join(folderPath, file.name),(err,stats)=>{
        if (err) throw err;
        const fileName = file.name.split('.')[0];
        const fileExtension = file.name.split('.')[1];
        const fileSize = stats.size;

        console.log('Имя файла: ' + `${fileName}`+', ' +'расширение файла: '+`${fileExtension}`+', ' + 'вес файла: '+ `${fileSize}`);
    });
}

});
  });
  




