// Exercício 7 - Gerenciador de lista de tarefas

const readline = require("node:readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const tarefas = []; // lista de { descricao, concluida }

async function main() {
  let opcao = "";

  while (opcao !== "0") {
    console.log(`
1 - Adicionar
2 - Listar
3 - Buscar
4 - Alterar
5 - Remover
6 - Quantidade
7 - Marcar concluída
0 - Sair`);
    opcao = await rl.question("Escolha: ");

    if (opcao === "1") {
      const descricao = await rl.question("Descrição: ");
      tarefas.push({ descricao, concluida: false });
    } else if (opcao === "2") {
      tarefas.forEach((t, i) => console.log(`${i} - [${t.concluida ? "X" : " "}] ${t.descricao}`));
    } else if (opcao === "3") {
      const i = Number(await rl.question("Índice: "));
      console.log(tarefas[i] || "Não encontrada");
    } else if (opcao === "4") {
      const i = Number(await rl.question("Índice: "));
      if (tarefas[i]) tarefas[i].descricao = await rl.question("Nova descrição: ");
    } else if (opcao === "5") {
      const i = Number(await rl.question("Índice: "));
      tarefas.splice(i, 1);
    } else if (opcao === "6") {
      console.log("Total:", tarefas.length);
    } else if (opcao === "7") {
      const i = Number(await rl.question("Índice: "));
      if (tarefas[i]) tarefas[i].concluida = true;
    }
  }

  rl.close();
}

main();
