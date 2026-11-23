// 9. Sistema de atendimento utilizando fila
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const perguntar = texto => new Promise(resolve => rl.question(texto, resolve));
const fila = [];
let proximaSenha = 1;

(async () => {
  while (true) {
    console.log("\n1-Adicionar pessoa 2-Chamar próxima 3-Próximo 4-Mostrar fila 5-Quantidade 0-Sair");
    const op = await perguntar("Opção: ");
    if (op === "0") break;
    if (op === "1") {
      const nome = await perguntar("Nome: ");
      fila.push({ senha: proximaSenha++, nome, entrada: new Date().toLocaleTimeString("pt-BR") });
    } else if (op === "2") console.log(fila.length ? "Atendendo:", fila.shift() : "Fila vazia.");
    else if (op === "3") console.log("Próximo:", fila[0] || "Fila vazia.");
    else if (op === "4") console.table(fila);
    else if (op === "5") console.log("Aguardando:", fila.length);
    else console.log("Opção inválida.");
  }
  rl.close();
})();
// A fila segue FIFO: quem chega primeiro é atendido primeiro.
