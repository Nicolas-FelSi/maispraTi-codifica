// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const input = require("prompt-sync")();

const nota = input("Digite a nota: ").trim();

if (isNaN(nota) || nota == "") {
    console.log("Digite apenas números.");
} else {
    if (nota >= 0 && nota < 5.0) {
    console.log("REPROVADO!");
    } else if (nota >= 0 && nota <= 6.9) {
        console.log("RECUPERAÇÃO!");
    } else if (nota >= 0 && nota <= 10) {
        console.log("APROVADO!");
    } else {
        console.log("Nota inválida.");
    }
}