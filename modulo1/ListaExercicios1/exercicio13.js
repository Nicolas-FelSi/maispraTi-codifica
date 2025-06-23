// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const input = require("prompt-sync")();
let media = 0;
let soma = 0;
let contador = 0;
let numero;

while (numero != 0) {
    numero = input("Informe um número (0 para encerrar): ").trim();
    
    if (!(isNaN(numero) || numero == "")) {
        if (numero != 0) {
            soma += Number(numero);
            contador++;
        }
    } else {
        console.log("Digite apenas números e utilize ponto no lugar de vírgula.");
    }
}

media = soma/contador;

if (!isNaN(media)) {
    console.log("Média: " + media.toFixed(2));
} else {
    console.log("Valores inválidos.");
}
