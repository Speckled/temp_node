const EventEmitter = require('events')
const customEmitter = new EventEmitter()


customEmitter.on('response',()=>{
    console.log(`Informacao recebida`);
})

customEmitter.emit('response')

customEmitter.on('resposta',(nome,idade)=>{
    console.log(`Informacao do servidor ${nome} de ID ${idade}`);
})

customEmitter.emit('resposta','john',34)
