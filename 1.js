// 1. Função para análise de números
const numeros = [10, 20, 5, 3, 8];

function maior(lista) { return Math.max(...lista); }
function menor(lista) { return Math.min(...lista); }
function media(lista) { return lista.reduce((soma, n) => soma + n, 0) / lista.length; }
function contarPares(lista) { return lista.filter(n => n % 2 === 0).length; }
function contarImpares(lista) { return lista.filter(n => n % 2 !== 0).length; }

if (numeros.length === 0) {
  console.log("A lista está vazia.");
} else {
  console.log("Maior:", maior(numeros));
  console.log("Menor:", menor(numeros));
  console.log("Média:", media(numeros));
  console.log("Pares:", contarPares(numeros));
  console.log("Ímpares:", contarImpares(numeros));
}
