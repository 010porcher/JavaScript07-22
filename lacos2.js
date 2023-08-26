const arrayOriginal = ['1', '2', '3', '4', '5']
function imprimir (){
    console.log(arrayOriginal)
}
function dividir(){
    for (let i = 0; i < 5; i ++){
    divisao = arrayOriginal[i] / 10 
    console.log(divisao)
    }
}
function par (){
    const novoArray = []
    for (let i = 0; i < 6; i ++){
        if(arrayOriginal[i] %2 === 0){
            novoArray.push(arrayOriginal[i])
        }
    }
    console.log(novoArray)
}
    function string (){
        arrayString = []
    for (let i = 0; i < 6; i ++){
        arrayString.push("O elemento " + [i] + " é:", arrayOriginal[i] )
    }
    console.log(arrayString)
    }
        function maiorMenor(arrayOriginal){
            maiorNumero = 0
        for (let i = 0; i < arrayOriginal; i ++)
            if(maiorNumero < arrayOriginal[i]){
                maiorNumero = arrayOriginal[i]
            }
            return maiorNumero
        }
        console.log(maiorMenor(arrayOriginal))
imprimir()
dividir()
par()
string()
maiorMenor()