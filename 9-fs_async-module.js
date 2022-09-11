const {readFile, writeFile} = require('fs')

console.log(`inciciando tarefa`);

const first =  readFile('./textos/teste.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('fim da primeira');
    console.log('inicio da segunda');
    const second = readFile('./texto1.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('fim da segunda');
        console.log('inicio da terceira');
        const third =  readFile('./texto2.txt','ascii',(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('fim da terceira');
            writeFile(
                './textos/concatAsync',
                `${second} e ${first} e ${third}`,
                {flag:'a'},
                (err,result)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                }
            )
            console.log('final da escrita')
        })
    })
})
console.log('final leituras');


console.log('final geral');


console.log('final geral');
