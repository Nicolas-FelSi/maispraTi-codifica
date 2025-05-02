// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const input = require("prompt-sync")();

console.log("1 - Opção 1 \n2 - Opção 2 \n3 - Opção 3\n");

const opcao = input("Opção: ").trim();

switch (opcao) {
    case "1":
        console.log("Opção 1 escolhida");
        break;
    case "2":
        console.log("Opção 2 escolhida");
        break;
    case "3":
        console.log("Opção 3 escolhida");
        break;
    default:
        console.log("Opção inválida.");
        break;
}