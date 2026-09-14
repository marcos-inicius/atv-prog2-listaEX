// Exercício 3 - Calculadora modular

const readline = require("node:readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function soma(a, b) { return a + b; }
function subtracao(a, b) { return a - b; }
function multiplicacao(a, b) { return a * b; }
function divisao(a, b) { return b === 0 ? "Erro: divisão por zero" : a / b; }
function potencia(a, b) { return a ** b; }
function resto(a, b) { return b === 0 ? "Erro: divisor zero" : a % b; }

async function main() {
  let opcao = "";

  while (opcao !== "0") {
    console.log(`
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
5 - Potência
6 - Resto
0 - Sair`);
    opcao = await rl.question("Escolha: ");
    if (opcao === "0") break;

    const a = Number(await rl.question("Número 1: "));
    const b = Number(await rl.question("Número 2: "));

    if (opcao === "1") console.log("Resultado:", soma(a, b));
    else if (opcao === "2") console.log("Resultado:", subtracao(a, b));
    else if (opcao === "3") console.log("Resultado:", multiplicacao(a, b));
    else if (opcao === "4") console.log("Resultado:", divisao(a, b));
    else if (opcao === "5") console.log("Resultado:", potencia(a, b));
    else if (opcao === "6") console.log("Resultado:", resto(a, b));
    else console.log("Opção inválida");
  }

  rl.close();
}

main();
