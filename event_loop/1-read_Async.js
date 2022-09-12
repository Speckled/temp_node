const {readFile} = require('fs')

console.log('Inicio')

readFile(
    './textos/teste.txt',
    'utf-8',
    (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
        console.log('Fim tarefa 1')
    })
console.log('Proxima tarefa');