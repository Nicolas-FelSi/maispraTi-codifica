// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const input = require("prompt-sync")();

const primeiroValor = input("Informe o primeiro número: ").trim();
const segundoValor = input("Informe o segundo número: ").trim();

if (!(isNaN(primeiroValor) && isNaN(segundoValor))) {
    if (primeiroValor > segundoValor) {
        console.log(segundoValor);
        console.log(primeiroValor);
    } else {
        console.log(primeiroValor);
        console.log(segundoValor);
    }
} else {
    console.log("Digite apenas números e utilize ponto no lugar de vírgula.");
}