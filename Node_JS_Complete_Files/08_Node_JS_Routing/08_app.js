const http = require('http');

const router = require('./router/appRouting');

let hostname = '127.0.0.1';
let port = 3000;

let server = http.createServer((request,response) => {
    let url = request.url;
    console.log(url);
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');// response.writeHead(200,{'content-Type','text/html'});

    // Routing Logic
    router.mapRoutes(url,response);
});

server.listen(port,hostname,() => {
    console.log(`Server is started at http://${hostname}:${port}`);
});