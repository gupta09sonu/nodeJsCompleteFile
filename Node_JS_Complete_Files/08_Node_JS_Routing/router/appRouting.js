const fs = require('fs');
const path = require('path');

let mapRoutes = (url,response) => {
    // Application Routing Logic

    // For Home Page
    if(url === '/'){
        fs.readFile(path.join(__dirname,'..','views','index.html'),'utf8',(err,data) => {
            if(err) throw  err;
            response.write(data);
            response.end();
        });
    }
    // for About Us Page
    else if(url === '/about'){
        fs.readFile(path.join(__dirname,'..','views','about.html'),'utf8',(err,data) => {
            if(err) throw  err;
            response.write(data);
            response.end();
        });
    }
    // for Services Page
    else if(url === '/services'){
        fs.readFile(path.join(__dirname,'..','views','services.html'),'utf8',(err,data) => {
            if(err) throw  err;
            response.end(data);
        });
    }
    // for Profile Page
    else if(url === '/profile'){
        fs.readFile(path.join(__dirname,'..','views','profile.html'),'utf8',(err,data) => {
            if(err) throw  err;
            response.write(data);
            response.end();
        });
    }
    // for Contact Page
    else if(url === '/contact'){
        fs.readFile(path.join(__dirname,'..','views','contact.html'),'utf8',(err,data) => {
            if(err) throw  err;
            response.write(data);
            response.end();
        });
    }
    else if(url === '/feedback'){
        fs.readFile(path.join(__dirname,'..','views','feedback.html'),'utf8',(err,data)=>{
            if(err){throw err;}
            else{response.write(data);
            response.end();}
        });
    }
    else{
        fs.readFile(path.join(__dirname,'..','views','404.html'),'utf8',(err,data) => {
            if(err) throw  err;
            response.write(data);
            response.end();
        });
    }
};

module.exports = {
    mapRoutes
};