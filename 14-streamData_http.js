const {createReadStream}=require('fs')

const stream = createReadStream('./textos/bgFile.txt',{highWaterMark:240000})

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err);
})
