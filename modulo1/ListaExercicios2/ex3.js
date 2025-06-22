// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const frase = "olá olá mundo mundo teste exemplo mundo";

const palavras = frase.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let contador = 0;

  for (let j = 0; j < palavras.length; j++) {
    if (palavras[i] === palavras[j]) {
      contador++;
    }
  }

  if (contador === 1) {
    if (!unicas.includes(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }
}

console.log(unicas);
