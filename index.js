const fs = require('fs');
const { file_read } = require('./reader')
const txt = fs.readFileSync('./code.txt', 'utf-8');

if(!txt){
    console.log("Error during opening file");
} else {
    file_read(txt)
}


