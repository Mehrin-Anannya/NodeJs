// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// const startPeriod = require('./school');
// emitter.on('bellring', ({period, text}) => {
//     console.log(`We need to run because ${period} ${text}`);
// });
// startPeriod();


const School = require('./school');
const school = new School();

school.on('bellring', ({period, text}) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();