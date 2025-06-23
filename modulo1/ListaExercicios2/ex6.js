// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

const fatorial = require('./ex4.js');

function memoize(fn) {
  const cache = {};

  return function(...args) {
    const chave = JSON.stringify(args);

    if (cache[chave]) {
      console.log('Resultado do cache');
      return cache[chave];
    }

    const resultado = fn.apply(this, args);
    cache[chave] = resultado;
    return resultado;
  };
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5));
console.log(fatorialMemo(5));
console.log(fatorialMemo(6));

