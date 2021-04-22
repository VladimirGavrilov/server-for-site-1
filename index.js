const fs = require('fs');
const readStream = fs.createReadStream('./data/pesok.txt');
const writeStream = fs.createWriteStream('./data/news.txt');

readStream.on('data', function(chunk) {
    console.log("Новые данные получены/n")
    writeStream.write(chunk)
})

console.log("work");

