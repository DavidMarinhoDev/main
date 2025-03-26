// Matricula: 25114290113 
// Nome: David Marinho Gonçalves Fonseca
// Atividade 05

const prompt = require('prompt-sync') ({sigint: true})

console.log('Digite uma cor [VERDE], [AMARELO], [VERMELHO]')
var per = (prompt("Digite: "))
//var res = per.toLowerCase();

if (res == "verde" || res == "amarelo" || res == "vermelho"){
    switch (res) {
        case "verde":
            console.log("Siga!");
            break;
        case "amarelo":
            console.log("Atenção!")
            break;
        case "vermelho":
            console.log("Pare!");
            break;
        default:
            break;
        }
} else{ 
    console.log("Cor inválida entrada pelo usuário!");
}