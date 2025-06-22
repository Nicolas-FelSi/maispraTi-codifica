// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12) return false;
  if (ano < 1) return false;

  const diasNoMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 
                      31, 31, 30, 31, 30, 31];

  return dia >= 1 && dia <= diasNoMes[mes - 1];
}

console.log(ehDataValida(3, 7, 2002));
console.log(ehDataValida(53, 7, 2392));
