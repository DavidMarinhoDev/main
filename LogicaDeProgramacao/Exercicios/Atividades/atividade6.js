// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 06

const prompt = require('prompt-sync') ({sigint: true})

var n = prompt("Digite um número real positivo: ")
var num = parseInt(n)

if (isNaN(num)){
    console.log("Digite um número válido!")
} else{
    if(num % 3 == 0){
        console.log("O número é múltiplo de 3");
    } else {
        console.log("o número não é múltiplo de 3");
    }
}