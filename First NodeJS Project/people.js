var people = ['sakib', 'tamim', 'mashrafe'];
var t = 20;
function test(){
    console.log("test");
}
//console.log(module);
module.exports = {
    people: people,
    a: t,
    test : test
}

// module.exports = {
//     people,
//     t,
//     test
// }

// from where require, modules, __dirname,__filename are coming
//when we write the codes in node js files it is wraped with iife 
// //like the following example
// (function(exports, require, module, __dirname,__filename) {
//     var people = ['sakib', 'tamim', 'mashrafe'];
//     var t = 20;
//     function test(){
//         console.log("test");
//     }
//     module.exports = people;   
//     return module.exports;  // if we don't write like this,
//                               it returns blank object
// })();
// this is called as module wrapper function 
// which is invisible