
const readline = require("node:readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
 
const fila = [];
let senha = 1;
 
function adicionar(nome) {
  fila.push({ senha: senha++, nome, hora: new Date().toLocaleTimeString() });
}
 
function chamarProximo() {
  return fila.shift();
}
 
function proximo() {
  return fila[0];
}
 
async function main() {
  let opcao = "";
 
  while (opcao !== "0") {
    console.log(`
1 - Adicionar pessoa
2 - Chamar próximo
3 - Ver próximo
4 - Ver fila
5 - Quantidade aguardando
0 - Sair`);
    opcao = await rl.question("Escolha: ");
 
    if (opcao === "1") {
      const nome = await rl.question("Nome: ");
      adicionar(nome);
    } else if (opcao === "2") {
      console.log("Chamado:", chamarProximo() || "Fila vazia");
    } else if (opcao === "3") {
      console.log("Próximo:", proximo() || "Fila vazia");
    } else if (opcao === "4") {
      console.log("Fila:", fila);
    } else if (opcao === "5") {
      console.log("Aguardando:", fila.length);
    }
  }
 
  rl.close();
}
 
main();
 
// Uma fila é ideal porque segue FIFO: quem chega primeiro é atendido
// primeiro. Uma pilha atenderia sempre o último a chegar, o que seria injusto.