// Exercício 1 - Análise de números

function maiorValor(numeros) {
  return Math.max(...numeros);
}

function menorValor(numeros) {
  return Math.min(...numeros);
}

function media(numeros) {
  const soma = numeros.reduce((acc, n) => acc + n, 0);
  return soma / numeros.length;
}

function quantidadePares(numeros) {
  return numeros.filter((n) => n % 2 === 0).length;
}

function quantidadeImpares(numeros) {
  return numeros.filter((n) => n % 2 !== 0).length;
}

const numeros = [4, 7, 10, 3, 8, 15, 6];

console.log("Números:", numeros);
console.log("Maior:", maiorValor(numeros));
console.log("Menor:", menorValor(numeros));
console.log("Média:", media(numeros));
console.log("Pares:", quantidadePares(numeros));
console.log("Ímpares:", quantidadeImpares(numeros));
