let leitor = require("readline-sync")
numero = leitor.questionInt("Escolha um numero: ")
console.log("Vamos jogar!")
numeroChutado = leitor.questionInt("Escreva algum numero:") 
    if (numeroChutado > numero){
        console.log(" O número chutado foi: " + numeroChutado)
        console.log("Errou. O número escolhido é menor")
    }else if(numeroChutado < numero){
        console.log(" O número chutado foi: " + numeroChutado)
        console.log("Errou. O número escolhido é maior")
    }
