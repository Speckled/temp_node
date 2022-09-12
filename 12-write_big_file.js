
const {readFile , writeFileSync} = require('fs')


for(let i=0; i<10000;i++){

    writeFileSync('./textos/bigFile.txt',`Ola pessoal ${i}\n`,{flag:'a'})

}