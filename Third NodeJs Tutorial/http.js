const http = require('http');

//1.
// const http = require('http');       //callback function is used here.
// const server = http.createServer();
// //when any user hits/request to this server this connection function will be triggered
// //and the server will start to work on this port. 
// //This is a very lower level element
// //run the file and check your browser localhost:3000
// //this process is never used for connection now-a-days
// server.on('connection', () => {
//    console.log('New connection ....') ;
// });
// server.listen(3000);
// console.log('Listening to port 3000');

// //2.
// const http = require('http');       //callback function is used here.
// const server = http.createServer((req,res) => {
//  res.write("Hello programmers");
//  res.write("How are you?");
//  res.end();
//  //it is responsibl fo any kind of DataTransfer.
// // for each user hot this callback funtion will be triggered
//     //if(req.url ===  )
// });


//3.
const server = http.createServer((req,res) => {
    if(req.url = '/'){
        res.write("Hello programmers");
        res.write("How are you?");
        res.end();
        }else if(req.url === '/About-us'){
            res.write("Eat food");
            res.write("How are you?");
            res.end();
            }else {
                res.write("Leaving");
                res.end();
        }
        //it is responsible fo any kind of DataTransfer.
// for each user hot this callback funtion will be triggered
    //if(req.url ===  )
});

 server.listen(3000);
console.log('Listening to port 3000');
    