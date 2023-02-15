const EventEmitter = require('events');
const emitter = new EventEmitter();
//1.
//register a listener for bellring event
// emitter.on('bellring', () => {
//   console.log('We nedd to run!');
// });

//raise an event
//emitter.emit('bellring');


//2.
// event listener with setTimeout
//register a listener for bellring event
// emitter.on('bellring', () => {
//   console.log('We nedd to run!');
// });

//raise an event after 10 seconds.
// setTimeout(() => {
//    emitter.emit('bellring');
// }, 10000);


//3.
// setTimeout have to be used after declaring the event listener 
//otherwise it will not show anything since it will be triggered before the listener
// //raise an event after 10 seconds.
// setTimeout(() => {
//    emitter.emit('bellring');
// }, 10000);
//emitter.emit('bellring');
//register a listener for bellring event
// emitter.on('bellring', () => {
//   console.log('We nedd to run!');
// });


//4. with single parameter which is a better approach an encouraged
//register a listener for bellring event
// emitter.on('bellring', (period) => {
//   console.log(`We nedd to run because ${period}`);
// });

// //raise an event after 10 seconds.
// setTimeout(() => {
//    emitter.emit('bellring', 'second period ended');
// }, 2000);


//5. with multiple paramter
//register a listener for bellring event
emitter.on('bellring', ({period, text}) => {
  console.log(`We nedd to run because ${period} ${text}`);
});

//raise an event after 10 seconds.
setTimeout(() => {
   emitter.emit('bellring', {
       period: 'first',
       text: 'period ended',
});
}, 1000);


