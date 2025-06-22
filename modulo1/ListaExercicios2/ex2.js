// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa;
let tentativas = 0;

console.log('=== Jogo de Adivinhação ===');
console.log('Tente adivinhar o número entre 1 e 100.');

while (true) {
  tentativa = parseInt(prompt('Digite seu palpite: '));
  tentativas++;

  if (tentativa === numeroSecreto) {
    console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
    break;
  } else if (tentativa < numeroSecreto) {
    console.log('Mais alto!');
  } else if (tentativa > numeroSecreto) {
    console.log('Mais baixo!');
  } else {
    console.log('Por favor, digite um número válido.');
  }
}
