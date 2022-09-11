const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('WebApp Home')
        res.end()
    }
    if(req.url==='/about'){
        res.end('Esta equipe e responsavel por este servico')
    }
    res.end(
        `<h1>Ooops infelizmente houve um erro</h1>
        <p>O conteudo requisitado nao esta disponivel</p>
        <a href="/">Home</a>        
        `
    )
    })



server.listen(5000)