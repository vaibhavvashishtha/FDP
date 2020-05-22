//events
var events = require('events');

var eventEmmitter = new events.EventEmitter();

var handler = function() {
    console.log('Event is triggered');
}

//attach even
eventEmmitter.on('testEvent', handler);

//emit event
eventEmmitter.emit('testEvent');

