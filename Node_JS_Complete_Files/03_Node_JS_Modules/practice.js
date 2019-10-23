const os = require('os');
const fs = require('fs');
//total memory
console.log(`TotalMemory:${os.totalmem()}`);
//Free Memory
console.log(`Free memory: ${os.freemem()}`);
//Host Name
console.log(`${os.hostname}`);
//Home Dir
console.log(`${os.homedir}`);
//user name
console.log(`${os.userInfo().username}`);
//current dir
console.log(`${__dirname}`);
//current file name
console.log(`${__filename}`);

//Write To A File
fs.writeFile('sonu.txt','hello sonu','utf8',(err)=>{
    if(err) throw err;
    console.log("data is saved");
});
//Read to file
fs.readFile('03_app.js','utf8',(err,data)=>{
    fs.writeFile('sonu.txt',data,'utf8',(err)=>{
        if(err) throw err;
        console.log('data is saved');
    });
});

console.log(`${__dirname}`);
console.log(`${__filename}`);