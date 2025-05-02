// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// const input = require("prompt-sync")();

// let ladoA = input("Digite o lado A: ").trim();
// let ladoB = input("Digite o lado B: ").trim();
// let ladoC = input("Digite o lado C: ").trim();

// if (!(isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC))) {
//     ladoA = Number(ladoA);
//     ladoB = Number(ladoB);
//     ladoC = Number(ladoC);

//     if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
//         console.log("É um triângulo!");

//         if (ladoA==ladoB || ladoA==ladoC || ladoB == ladoC) {
//             console.log("Triângulo isósceles.");
//         } else if (ladoA == ladoB && ladoB == ladoC) {
//             console.log("Triângulo equilátero.");
//         } else {
//             console.log("Triângulo escaleno.");
//         }
//     } else {
//         console.log("Não é um triângulo!");
//     }
// } else {
//     console.log("Digite apenas números e utilize ponto no lugar de vírgula.");
// }

