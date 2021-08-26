const http = require('http');

http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write('<h1>Node.js</h1>');
  res.end('<p>Hello World !</p>');
}).listen(9607);

console.log("HTTP server is listening at port http://localhost:9607");
