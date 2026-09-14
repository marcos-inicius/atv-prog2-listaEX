// Exercício 6 - Soma recursiva de uma lista

function somaRecursiva(numeros) {
  if (numeros.length === 0) return 0;
  return numeros[0] + somaRecursiva(numeros.slice(1));
}

console.log("a soma da Lista de numeros[10, 20, 5, 3] é")
console.log(somaRecursiva([10, 20, 5, 3])); // 38
