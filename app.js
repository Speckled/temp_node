const EventEmitter = require('events')
const customEmitter = new EventEmitter()


customEmitter.on('response',()=>{
    console.log(`Informacao recebida`);
})

customEmitter.emit('response')

