// 2. Validação utilizando funções
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const perguntar = texto => new Promise(resolve => rl.question(texto, resolve));

function validarNome(nome) { return nome.trim().length > 0; }
function validarIdade(idade) { return Number.isInteger(Number(idade)) && Number(idade) >= 14 && Number(idade) <= 120; }
function validarEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function validarSenha(senha) { return senha.length >= 8; }

(async () => {
  let nome, idade, email, senha;
  do { nome = await perguntar("Nome: "); if (!validarNome(nome)) console.log("Nome inválido."); } while (!validarNome(nome));
  do { idade = await perguntar("Idade: "); if (!validarIdade(idade)) console.log("Idade deve ser de 14 a 120."); } while (!validarIdade(idade));
  do { email = await perguntar("E-mail: "); if (!validarEmail(email)) console.log("E-mail inválido."); } while (!validarEmail(email));
  do { senha = await perguntar("Senha: "); if (!validarSenha(senha)) console.log("A senha deve ter pelo menos 8 caracteres."); } while (!validarSenha(senha));
  console.log("Cadastro concluído com sucesso!");
  rl.close();
})();
