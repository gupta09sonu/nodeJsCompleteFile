// include dependencies
const http = require('http');
const router = require('./model/appRouting');
 let port = 3000;
 let hostname = '127.0.0.1';



 //Create server
let server = http.createServer((req,response)=>{
    let url = req.url;
    console.log(url);
    response.statusCode = 200;
    response.writeHead(200,{'content-Type':'text/html'});
//    routing logic
    router.mapRoutes(url,response);

});

//assign port
server.listen(port,hostname,()=>{
    console.log(`server is ready at http://${hostname}:${port}`);
});