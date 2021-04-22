const fs = require('fs');
///подключение локального сервера
const http = require('http');
const server = http.createServer(function(req, res) {
    console.log(`URL страницы ${req.url}`)
    if(req.url === '/index' || req.url === '/'){ 
         res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
         fs.createReadStream(_dirname + '/src/index.html').pipe(res)

    }
    // читаем данные из фаила и отправляем к
    // const readStream = fs.createReadStream('./src/index.html');
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
      
    
   
});
server.listen(3000,'127.0.0.1')
console.log('Мы отслеживаем port 3000')

