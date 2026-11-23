// 3. Calculadora modular
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const perguntar = texto => new Promise(resolve => rl.question(texto, resolve));

const operacoes = {
  "1": (a, b) => a + b,
  "2": (a, b) => a - b,
  "3": (a, b) => a * b,
  "4": (a, b) => b === 0 ? "Não é possível dividir por zero." : a / b,
  "5": (a, b) => a ** b,
  "6": (a, b) => b === 0 ? "Não é possível calcular resto por zero." : a % b
};

(async () => {
  while (true) {
    console.log("\n1-Soma  2-Subtração  3-Multiplicação  4-Divisão  5-Potência  6-Resto  0-Sair");
    const opcao = await perguntar("Opção: ");
    if (opcao === "0") break;
    if (!operacoes[opcao]) { console.log("Opção inválida."); continue; }
    const a = Number(await perguntar("Primeiro número: "));
    const b = Number(await perguntar("Segundo número: "));
    if (!Number.isFinite(a) || !Number.isFinite(b)) { console.log("Digite números válidos."); continue; }
    console.log("Resultado:", operacoes[opcao](a, b));
  }
  rl.close();
})();
