// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// function startPeriod(){
//     console.log('Class Started');

//  setTimeout(() => {
//    emitter.emit('bellring', {
//     period: 'first',
//     text : 'period ended',
//    });
//  }, 2000);   
// }
// module.exports = startPeriod;

const EventEmitter = require('events');
class School extends EventEmitter{
    startPeriod(){
        console.log('Class Started');
    
     setTimeout(() => {
       this.emit('bellring', {
        period: 'first',
        text : 'period ended',
       });
     }, 2000);   
    }
}
module.exports = School;