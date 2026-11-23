// 6. Soma recursiva de uma lista
function somarLista(lista) {
  if (lista.length === 0) return 0;
  return lista[0] + somarLista(lista.slice(1));
}

console.log(somarLista([10, 20, 5, 3])); // 38
