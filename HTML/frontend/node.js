const http = require('http')
const fs = require('fs')
http.createServer((request, response) => {
  console.log('request url: ', request.url);
  
  if (request.url === '/') {
    const html = fs.readFileSync('../../week01/isValid.js', 'utf-8');
    
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'expires': new Date(Date.now() + 200 * 100 * 1000).toUTCString(),
      'cache-control':'public max-age=3000'
    });

    response.end(html);
  } else if (request.url === '/script.js') {
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'expires': new Date(Date.now() + 200 * 100 * 1000).toUTCString(),
      'cache-control':'public max-age=3000'
    });

    response.end("console.log('script load')");
  }

}).listen(8888)