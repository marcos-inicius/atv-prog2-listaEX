// 8. Histórico utilizando pilha
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const perguntar = texto => new Promise(resolve => rl.question(texto, resolve));
const historico = [];

(async () => {
  while (true) {
    console.log("\n1-Visitar página 2-Página atual 3-Voltar 4-Exibir histórico 0-Sair");
    const op = await perguntar("Opção: ");
    if (op === "0") break;
    if (op === "1") historico.push(await perguntar("Endereço da página: "));
    else if (op === "2") console.log("Atual:", historico.at(-1) || "Nenhuma página.");
    else if (op === "3") { if (historico.length > 1) { historico.pop(); console.log("Voltando para:", historico.at(-1)); } else console.log("Não há página anterior."); }
    else if (op === "4") console.log(historico);
    else console.log("Opção inválida.");
  }
  rl.close();
})();
// A pilha é adequada porque o último endereço visitado é o primeiro a ser removido (LIFO).
