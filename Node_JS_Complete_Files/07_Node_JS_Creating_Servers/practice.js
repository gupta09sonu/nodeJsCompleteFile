// include all dependencies
const http =require('http');

let port = 3000;
let hostname = '127.0.0.1';

//cerate http server
let server = http.createServer((req,res)=>{
    res.statusCode =200;
//    set MIME type
    res.writeHead(200,{'content-Type':'text/html'});
//    use write to send the resonse to he client
    res.write(`<h2 style="background-color: red;color: white;text-align: center;">Welcome to the server</h2>`);
    res.end();
});

// assign the port and listening
server.listen(port,hostname,()=>{
    console.log(`Server Is ready at http://${hostname}:${port}`);
});