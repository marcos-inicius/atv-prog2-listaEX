// Exercício 2 - Cadastro de usuário com validações

const readline = require("node:readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function validarNome(nome) {
  return nome.trim().length > 0;
}

function validarIdade(idade) {
  return idade >= 14 && idade <= 120;
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarSenha(senha) {
  return senha.length >= 8;
}

async function main() {
  let nome = await rl.question("Nome: ");
  while (!validarNome(nome)) {
    nome = await rl.question("Nome inválido, digite de novo: ");
  }

  let idade = Number(await rl.question("Idade: "));
  while (!validarIdade(idade)) {
    idade = Number(await rl.question("Idade inválida (14-120), digite de novo: "));
  }

  let email = await rl.question("E-mail: ");
  while (!validarEmail(email)) {
    email = await rl.question("E-mail inválido, digite de novo: ");
  }

  let senha = await rl.question("Senha: ");
  while (!validarSenha(senha)) {
    senha = await rl.question("Senha muito curta (mín. 8), digite de novo: ");
  }

  rl.close();
  console.log("Cadastro concluído:", { nome, idade, email });
}

main();
