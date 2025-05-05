// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const input = require("prompt-sync")();

const quantidMacas = input("Informe quantas maçãs comprou: ").trim();

if (!(isNaN(quantidMacas) || quantidMacas == "" || quantidMacas % 1 != 0)) {
    let totalCompra = 0;

    if (quantidMacas < 12) {
        totalCompra = quantidMacas * 0.30;        
    } else {
        totalCompra = quantidMacas * 0.25;
    }

    console.log("Total das compras: R$" + totalCompra.toFixed(2));
} else {
    console.log("Digite apenas números inteiros.");
}