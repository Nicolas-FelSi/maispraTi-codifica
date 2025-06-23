// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let primeiroValor = 0;
let segundoValor = 1;
let terceiroValor = 0;
let string = "0 1";

for (let i = 0; i < 8; i++) {
    terceiroValor = primeiroValor + segundoValor;
    
    primeiroValor = segundoValor;
    segundoValor = terceiroValor;

    string += " " + terceiroValor;
}

console.log(string);