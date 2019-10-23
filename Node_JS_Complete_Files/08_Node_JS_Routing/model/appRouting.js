const fs = require('fs');
const path = require('path');
//routing logic
let mapRoutes =(url,response)=>{
//    homepage
    if(url==="/"){
        fs.readFile(path.join(__dirname,'..','templates','index.html'),'utf8',(err,data)=>{
            if(err) throw err;
            response.write(data);
            response.end();
        });
    }
    else if(url==="/contact"){
        fs.readFile(path.join(__dirname,'..','templates','contact.html'),'utf8',(err,data)=>{
            if(err) throw err;
            response.write(data);
            response.end();
        });
    }
    else if(url==="/about"){
        fs.readFile(path.join(__dirname,'..','templates','about.html'),'utf8',(err,data)=>{
            if(err) throw err;
            response.write(data);
            response.end();
        });
    }
    else if(url==="/profile"){
        fs.readFile(path.join(__dirname,'..','templates','profile.html'),'utf8',(err,data)=>{
            if(err) throw err;
            response.write(data);
            response.end();
        });
    }
    else if(url==="/services"){
        fs.readFile(path.join(__dirname,'..','templates','services.html'),'utf8',(err,data)=>{
            if(err) throw err;
            response.write(data);
            response.end();
        });
    }
    else{
        fs.readFile(path.join(__dirname,'..','templates','404.html'),'utf8',(err,data)=>{
            if(err) throw err;
            response.write(data);
            response.end();
        });
    }

};

module.exports ={
    mapRoutes
};

