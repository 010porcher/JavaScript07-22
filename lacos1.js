let leitor = require("readline-sync")
bichinhosEstimacao = leitor.questionInt("Quantos bichinhos de estimação voce tem ? ")
let bichos = []
if(bichinhosEstimacao === 0){
console.log("Que pena! Você pode adotar um pet!")
}else if(bichinhosEstimacao > 0){
    for (let i = 0; i < bichinhosEstimacao; i ++){
        bichos1 = leitor.question(" Digite o nome deles: ")
        bichos[i] = bichos1
    }
    console.log(bichos)
}