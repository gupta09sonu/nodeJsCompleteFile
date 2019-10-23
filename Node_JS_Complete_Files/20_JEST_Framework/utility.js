const fs = require('fs');

let getDate = () => {
    console.log(new Date().toLocaleDateString());
};

let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// file Storage
let addToFile = (filename,data) => {
    fs.writeFile(filename,data,'utf8',(err) => {
        if(err) throw err;
        console.log('data is saved');
    });
};

module.exports = {
    getDate,
    reverseString,
    addToFile
};