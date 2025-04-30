// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

const input = require("prompt-sync")();

const idade = input("Digite sua idade: ").trim();

if(isNaN(idade) || idade % 1 != 0 || idade == "") {
    console.log("Digite apenas números inteiros.");
} else if (idade > 0 && idade <= 12) {
    console.log("CRIANÇA.");
} else if (idade >= 13 && idade <= 19) {
    console.log("ADOLESCENTE.");
} else if (idade >= 20 && idade <= 59) {
    console.log("ADULTO.");
} else if (idade >= 60) {
    console.log("IDOSO."); 
} else {
    console.log("Idade inválida.");
}