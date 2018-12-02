const Logger = require('./logger');
const os = require('os');
const path = require('path');
const fs = require('fs');


const myEvent = new Logger();

myEvent.on('run', (myData, status) => {
    console.log('salam rachid', myData, status);
    fs.appendFile('log.json', JSON.stringify(myData), (err) => {
       console.error(err)
    })
})

myEvent.log('Mehdi');

// myEvent.emit('allo');

//fs.appendFileSync('log.txt', `salam les amis\n`);

//console.log(fs.readFileSync('./log.txt'));

//console.log(path.parse(__dirname));
//console.log(os.networkInterfaces())
//console.log(os.totalmem());
//console.log(logger.url);

//logger('Mohamed iDBRAHIM');

// console.log('first')
// setTimeout(function () { console.log('get user from db') }, 2000);
// console.log('finish')
