// Exercício 5 - Fibonacci

function fibonacciRecursivo(n) {
  if (n <= 1) return n;
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

function fibonacciIterativo(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

console.log("Fibonacci(10) recursivo:", fibonacciRecursivo(10));
console.log("Fibonacci(10) iterativo:", fibonacciIterativo(10));

// A versão recursiva recalcula os mesmos valores várias vezes, ficando
// muito lenta para n grande. A versão iterativa é mais eficiente.
