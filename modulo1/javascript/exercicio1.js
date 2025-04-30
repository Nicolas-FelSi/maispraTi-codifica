// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const input = require("prompt-sync")();

const numero = input("Digite um número inteiro: ").trim();

if (isNaN(numero) || numero % 1 != 0 || numero == "") {
    console.log("Digite apenas números inteiros.")
} else if (numero % 2 == 0) {
    console.log(`Número ${numero} é PAR.`);
} else {
    console.log(`Número ${numero} é ÍMPAR.`);
}
