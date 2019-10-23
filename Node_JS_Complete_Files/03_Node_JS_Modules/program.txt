// Load os module
const os = require('os');
const fs = require('fs');

// Total Memory
console.log(`Total Memory : ${os.totalmem()}`);

// Free Memory
console.log(`Free Memory : ${os.freemem()}`);

// Host Name
console.log(`Host Name ${os.hostname}`);

// home Dir
console.log(`Home Dir ${os.homedir}`);

// username
console.log(`User Name : ${os.userInfo().username}`);

// current Dir
console.log(`Dir Name : ${__dirname}`);

// current file name
console.log(`File Name : ${__filename}`);

// Write to a file
fs.writeFile('data.txt','Good Morning','utf8',(err) => {
    if(err) throw err;
    console.log('data is saved');
});

// Read a file
fs.readFile('03_app.js','utf8',(err,data) => {
    if(err) throw err;
    fs.writeFile('program.txt',data,'utf8',(err) => {
        if(err) throw err;
        console.log('data is saved');
    });
});