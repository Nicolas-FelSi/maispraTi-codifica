// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const input = require("prompt-sync")();

const numero = input("Digite um número inteiro: ").trim();

if (!(isNaN(numero) || numero == "" || numero % 1 != 0)) {
    for (let i = 0; i < 10; i++) {
        console.log(numero);        
    }
} else {
    console.log("Digite apenas um número inteiro.");
}