const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Evento de requerimento')
    res.end('Boa noite!')
})

server.listen(5000,()=>{
    console.log('Servidor na porta: 5000');
})