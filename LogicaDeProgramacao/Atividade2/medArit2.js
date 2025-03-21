// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 03

const prompt = require('prompt-sync') ({sigint: true});

var n1 = parseInt(prompt('Digite um número: '));
var n2 = parseInt(prompt('Digite outro número: '));
var n3 = parseInt(prompt('Digite mais um número: '));
var soma = n1 + n2 + n3;
var medArit = soma / 3;

if (n1 <= 100 && n2 <= 100 && n3 <= 100){
    console.log(`A média aritmética entre os números ${n1}, ${n2}, e ${n3} é ${medArit}`)
} else {
    console.log('Digite um número entre 0 e 100')
}

