// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const input = require("prompt-sync")();
let total = 0;

for (let i = 0; i < 5; i++) {
    const numero = input(`Informe o ${i+1}° número: `).trim();
    total += Number(numero);    
}

console.log("Total: " + total);