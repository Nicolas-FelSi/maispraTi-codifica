// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const input = require("prompt-sync")();

const peso = input("Informe seu peso: ").trim();
const altura = input("Informe sua altura: ").trim();

if (!(isNaN(peso) || isNaN(altura))) {
    const imc = peso/(altura * altura);

    console.log(`\nIMC: ${imc.toFixed(2)}\n`);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.6 && imc <= 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
} else {
    console.log("Digite apenas números e utilize ponto no lugar de vírgula.")
}