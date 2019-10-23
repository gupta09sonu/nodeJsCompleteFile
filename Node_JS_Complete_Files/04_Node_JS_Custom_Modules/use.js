const  fs = require('fs');
//Date Function
let getDate = ()=>{
    console.log(new Date().toLocaleDateString());
};

//Reverse String function
let reverseString = (str)=>{
    let tempStr ='';
    for(let i=str.length-1;i>=0;i--){
        tempStr += charAt(i);
    }
    return tempStr;
};

//File Storage
let addToFile =(path,data)=>{
    fs.writeFile('path','data','utf8',(err)=>{
        if(err) throw err;
        console.log('file saved');
    });
};

//make this functions available to another file
module.exports={
        getDate,
        reverseString,
        addToFile
}