//path module
//const path = require('path');
//os module
//const os = require('os');
//file module
const fs = require('fs');


//path module's fuction use
//const mypath = 'E:/NodeJS/Second NodeJs Tutorial/index.js';
 //console.log(path.basename(mypath));
 //console.log(path.dirname(mypath));
 //console.log(path.parse(mypath));

 //os module's fuction use
//  console.log(os.platform());
//  console.log(os.homedir());
//  console.log(os.freemem());
//  console.log(os.cpus());

 //fs module's fuction use
// fs.writeFileSync('test.txt', 'Learning JS');
// fs.writeFileSync('test.txt', 'Learning JS Test');
// fs.appendFileSync('test.txt', 'append Learning JS');
// const data = fs.readFileSync('test.txt');
// console.log(data);
// //it returns buffer ( a separate data that gives binary form data)
// console.log(data.toString());

//node js works in asynchronous non-blocking way
//readFileSync gives synchronous feature and readFile gives asynch feature
//it better to use asynchronous always 
//asynchronous gives a task a moves to the next line work that's why it needs 
// a call back function to hold that assigned task

fs.readFile('test.txt', (err, dataAsync) =>{
    console.log(dataAsync.toString());
});

console.log('hello');