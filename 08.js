// Exercício 8 - Histórico de navegação usando pilha

const readline = require("node:readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const pilha = [];

function visitar(url) {
  pilha.push(url);
}

function paginaAtual() {
  return pilha[pilha.length - 1];
}

function voltar() {
  if (pilha.length > 1) pilha.pop();
  return paginaAtual();
}

async function main() {
  let opcao = "";

  while (opcao !== "0") {
    console.log(`
1 - Visitar página
2 - Ver página atual
3 - Voltar
4 - Ver histórico
0 - Sair`);
    opcao = await rl.question("Escolha: ");

    if (opcao === "1") {
      const url = await rl.question("URL: ");
      visitar(url);
    } else if (opcao === "2") {
      console.log("Página atual:", paginaAtual() || "(nenhuma)");
    } else if (opcao === "3") {
      console.log("Voltou para:", voltar() || "(nenhuma)");
    } else if (opcao === "4") {
      console.log("Histórico:", pilha);
    }
  }

  rl.close();
}

main();

// Uma pilha é ideal porque a navegação segue LIFO: o "voltar" sempre
// leva à última página visitada (a que está no topo).