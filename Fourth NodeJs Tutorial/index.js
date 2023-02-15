const http = require('http');
const fs = require('fs');
//1.
const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const myWriteStream = fs.createWriteStream(`${__dirname}/output.txt`)

//reading data
// myReadStream.on('data', (chunk) => {
// console.log(chunk);
// //console.log(chunk.toString());
// });
myReadStream.on('data', (chunk) => {
console.log(chunk);
});

//writing data through http server
 myReadStream.on('data', (chunk) => {
    myWriteStream.pipe(chunk);
 });

    


//2.
const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000);

console.log('listening on port 3000');