// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

const input = require("prompt-sync")();
let numero = input("Informe um número inteiro para a tabuada: ").trim();

if (!(isNaN(numero) || numero == "" || numero % 1 != 0)) {

    numero = Number(numero);

    for (let i = 1; i < 11; i++) {
        console.log(`${numero} x ${i} = ${numero*i}`);        
    }
} else {
    console.log("Digite apenas números inteiros.");
}