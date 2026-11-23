// 10. Comparando lista, pilha e fila
const respostas = [
  ["A. Histórico do navegador", "Pilha", "A navegação de voltar utiliza o último endereço visitado."],
  ["B. Pessoas aguardando atendimento", "Fila", "O primeiro a chegar deve ser o primeiro atendido."],
  ["C. Catálogo de produtos", "Lista", "Permite percorrer, buscar e acessar produtos por posição."],
  ["D. Função desfazer de um editor", "Pilha", "A última ação realizada deve ser desfeita primeiro."],
  ["E. Playlist acessada por posição", "Lista", "Permite acessar músicas em posições específicas."]
];
respostas.forEach(([situacao, estrutura, justificativa]) => {
  console.log(`${situacao}: ${estrutura}. ${justificativa}`);
});
