const { log } = require('console')
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./textos/teste.txt','utf8')
const second = readFileSync('./texto1.txt','utf8')
const third = readFileSync('./texto2.txt','ascii')

console.log(first);
console.log(second);
console.log(third);

writeFileSync(
    './textos/concat1e2',
    `${second} e ${first}`,
    {flag:'a'}
)


