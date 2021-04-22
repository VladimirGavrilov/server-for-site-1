const fs = require('fs');
console.log("work");
///подключение локального сервера
const http = require('http');
const server = http.createServer(function(req, res) {
    console.log(`URL страницы ${req.url}`)
    const readStream = fs.createReadStream('./data/pesok.txt');
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'})
    readStream.pipe(res);
   
});
server.listen(3000,'127.0.0.1')
console.log('Мы отслеживаем port 3000')

