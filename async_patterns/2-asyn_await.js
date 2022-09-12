const { readFile, writeFile } = require("fs")
const util = require('util')
const readFilePromisse = util.promisify(readFile)
const writeFilePromisse = util.promisify(writeFile)

const start = async()=>{
    try{
        const first = await readFilePromisse('./textos/concat1e2','utf-8')
        const second = await readFilePromisse('./textos/teste.txt','ascii')
        await writeFilePromisse ('./textos/novas_ideias.txt',`As coisas estao ficando bem mais complicadas: ${first}, mas e uma questao de pratica ${second} `)

        console.log(first,second);
    }catch(error){
        console.log(error);
    }
    
}
start()






// const getText=(path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'ascii',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })    
//     })
// }




// getText('./textos/concat1e2')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err))