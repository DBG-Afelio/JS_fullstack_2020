const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) { 
     // Send HTTP headers and body with status 200 (meaning success) 
     console.log('url', request.url, request.url.startsWith('/dist'), fs.readdirSync('./dist'));
     const file = `.${request.url}`;
     if (request.url.startsWith('/dist')) {
        if(fs.existsSync(file)) {
            if (file.endsWith('js') || file.endsWith('ts')) {
                response.writeHead(200, {'Content-Type': 'text/javascript'});  
            } else {
                 response.writeHead(200, {'Content-Type': 'text/html'});  
            }
            response.end(fs.readFileSync(file));
        }
     } else {
         response.writeHead(200, {'Content-Type': 'text/html'});  
         response.end(`    <html><body>      <h1>Hello, world!</h1>      You asked for: ${request.url}    </body></html>`);
     }
}).listen(1234);