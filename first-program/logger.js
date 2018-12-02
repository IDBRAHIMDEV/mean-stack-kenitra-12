//var url = "http://elearndev.net";

const EventEmiter = require('events');


class Logger extends EventEmiter {
    
    log(message) {
        console.log('logger: ' + message);
        this.emit('run', {id: 22, name: "jilali"}, {status: 1});
    }
}




//module.exports.url = url;
module.exports = Logger;