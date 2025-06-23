// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timer;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function buscarDados() {
  console.log('Buscando dados...', new Date().toLocaleTimeString());
}

const buscarComDebounce = debounce(buscarDados, 2000);

buscarComDebounce();
buscarComDebounce();
buscarComDebounce();
