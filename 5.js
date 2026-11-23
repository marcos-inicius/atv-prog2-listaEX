// 5. Sequência de Fibonacci
function fibonacciRecursivo(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error("Informe um inteiro não negativo.");
  if (n <= 1) return n;
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

function fibonacciIterativo(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error("Informe um inteiro não negativo.");
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

const n = 10;
console.log("Recursivo:", fibonacciRecursivo(n));
console.log("Iterativo:", fibonacciIterativo(n));
// A versão iterativa é mais eficiente: O(n). A recursiva simples repete cálculos e cresce exponencialmente.
