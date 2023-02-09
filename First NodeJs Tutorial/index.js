// discuss about package.json and package-lock.json

// const _ = require('lodash');

// console.log(_.last([1, 5, 3, 2]));

// console.log(window);
// console.log(global);

// window used to attach variables with it
// but global don't attach aby variables with itself
// discuss about package.json and package-lock.json

// const a = 3;
// console.log(a);
// setTimeout(() => {
//     console.log('test');
// }, 1000);
// console.log(global);
// will be discussed later from where it is coming
// and also the require
// they are not in the global object
// console.log(__dirname);
// console.log(__filename);


// show modularity using index.html, script.js and script2.js
//require is used to import
//const people = require('./people') //people and people.js are same files 
//console.log(people.people);
//console.log(people.a);
//console.log(people.test);
//people.test();
// but it returns {}
//so add codes for export in people.js

//console.log(people.people);
//console.log(people.t);
//people.test();

//lodash
//const _=require('lodash');
//console.log(_.last(people.people));