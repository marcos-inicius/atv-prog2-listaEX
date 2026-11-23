// 7. Gerenciador de lista de tarefas
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const perguntar = texto => new Promise(resolve => rl.question(texto, resolve));
const tarefas = [];

(async () => {
  while (true) {
    console.log("\n1-Adicionar 2-Listar 3-Buscar 4-Alterar 5-Remover 6-Quantidade 7-Concluir 0-Sair");
    const op = await perguntar("Opção: ");
    if (op === "0") break;
    if (op === "1") {
      const descricao = (await perguntar("Tarefa: ")).trim();
      if (descricao) tarefas.push({ descricao, concluida: false });
    } else if (op === "2") {
      tarefas.forEach((t, i) => console.log(`${i + 1}. ${t.descricao} - ${t.concluida ? "Concluída" : "Pendente"}`));
    } else if (op === "3") {
      const termo = (await perguntar("Buscar: ")).toLowerCase();
      console.log(tarefas.filter(t => t.descricao.toLowerCase().includes(termo)));
    } else if (op === "4" || op === "5" || op === "7") {
      const indice = Number(await perguntar("Número da tarefa: ")) - 1;
      if (!tarefas[indice]) { console.log("Tarefa não encontrada."); continue; }
      if (op === "4") tarefas[indice].descricao = await perguntar("Nova descrição: ");
      if (op === "5") tarefas.splice(indice, 1);
      if (op === "7") tarefas[indice].concluida = true;
    } else if (op === "6") console.log("Total:", tarefas.length);
    else console.log("Opção inválida.");
  }
  rl.close();
})();
