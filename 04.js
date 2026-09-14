// Exercício 4 - Fatorial recursivo

function fatorial(n) {
  if (n === 0) return 1; // caso-base
  return n * fatorial(n - 1);
}

console.log("5! =", fatorial(5));

// 1) Caso-base: quando n é 0, retorna 1 direto.
// 2) Sem caso-base, a função chamaria a si mesma para sempre e daria erro de stack overflow.
// 3) Versão não recursiva:
function fatorialIterativo(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) resultado *= i;
  return resultado;
}
console.log("5! (iterativo) =", fatorialIterativo(5));
