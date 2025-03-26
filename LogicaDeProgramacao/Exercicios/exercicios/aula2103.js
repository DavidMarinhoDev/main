const { truncateSync } = require("fs");

var num = 5**4;
var paridade = (num % 2 == 0) ? "par" : "impar";
console.log(`O número ${num} é ${paridade}`)

var idade = 3**3
var categoria = (idade >= 22) ? `Profissional` : `Base`;
console.log(`O jogador tem ${idade} anos, logo sua categoria é ${categoria}`);

var idade = 11;
var res = (idade >= 18) ? "pode tirar a carteira" : "não pode tirar a carteira"; 
console.log(`Você tem ${idade} anos, logo ${res}`);

var idade = 25;
var checkIdade = idade >= 18 ? true : false;
var e = idade <= 18 ? "não tem idade" : checkIdade ? "Tem idade" : "não tem idade";
console.log(`Tem ${idade} anos. logo ${e} para beber`);

var idade = false,
    bebida = truncateSync,
        pode = idade ? "pode beber" 
        : bebida ? 
        "Pode levar bebida e pode beber" 
        : "Não pode levar bebida e não pode beber";
console.log(pode)

