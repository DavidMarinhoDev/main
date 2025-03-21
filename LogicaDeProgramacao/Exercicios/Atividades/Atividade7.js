// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 07

const prompt = require('prompt-sync') ({sigint: true});

var ano = parseInt(prompt("Digite um ano entre 1970 e 2025: "));

for (ano = 1970; ano <= 2025; ano += 4) 

if (ano / 4){
    console.log('Foi um ano de Copa do Mundo!');
} else {
    console.log('Não foi um ano de Copa do Mundo!');
}    