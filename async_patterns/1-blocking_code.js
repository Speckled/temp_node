const http = require('http')

const server = http.createServer((req,res)=>{
    
    if(req.url==="/"){
        console.log('home');
        res.end('Home Page')
        return
    }
    else if(req.url==="/about"){
        console.log('about');
        for(i=0;i<1000;i++){
            for(j=0;j<1000;j++){
                console.log(`${i} e ${j}`);
            }
        }
        res.end('About Page')
        return
    }
    else{
        console.log('indef');
        res.end('Error Page')
    }
})

server.listen(5000,()=>{
    console.log('Servidor On-line na porta 5000');
})