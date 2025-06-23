// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const input = require("prompt-sync")();

const numero = input("Informe um número: ").trim();
let total = 1;
let string = "";

if (!(isNaN(numero) || numero == "" || numero % 1 != 0)) {
    for (let i = Number(numero); i > 0; i--) {
        total *= i;
        
        if (i != 1) {
            string += `${i} x `;    
        } else {
            string += `${i} = ${total}`;
        }
    }
} else {
    console.log("Digite apenas números inteiros.");
}

console.log(string);