// 20. Sistema Web Cliente-Servidor - Requisições do cliente
const formulario = document.getElementById("formulario");
const campoDescricao = document.getElementById("descricao");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

// Estrutura de lista para armazenar temporariamente os dados recebidos.
let tarefas = [];

async function carregarTarefas() {
  try {
    const resposta = await fetch("/api/tarefas");
    if (!resposta.ok) throw new Error("Não foi possível carregar as tarefas.");

    tarefas = await resposta.json();
    lista.innerHTML = "";

    tarefas.forEach(tarefa => {
      const item = document.createElement("li");
      const texto = document.createElement("span");
      texto.textContent = tarefa.descricao;
      if (tarefa.concluida) texto.classList.add("concluida");

      const acoes = document.createElement("div");
      acoes.className = "acoes";

      const concluir = document.createElement("button");
      concluir.textContent = tarefa.concluida ? "Reabrir" : "Concluir";
      concluir.addEventListener("click", () => alterarTarefa(tarefa, !tarefa.concluida));

      const editar = document.createElement("button");
      editar.textContent = "Editar";
      editar.addEventListener("click", async () => {
        const novaDescricao = prompt("Nova descrição:", tarefa.descricao);
        if (novaDescricao && novaDescricao.trim()) {
          await alterarTarefa({ ...tarefa, descricao: novaDescricao.trim() }, !!tarefa.concluida);
        }
      });

      const excluir = document.createElement("button");
      excluir.textContent = "Excluir";
      excluir.addEventListener("click", () => excluirTarefa(tarefa.id));

      acoes.append(concluir, editar, excluir);
      item.append(texto, acoes);
      lista.appendChild(item);
    });
  } catch (erro) {
    mensagem.textContent = erro.message;
  }
}

async function alterarTarefa(tarefa, concluida) {
  const resposta = await fetch(`/api/tarefas/${tarefa.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descricao: tarefa.descricao, concluida })
  });

  const dados = await resposta.json();
  mensagem.textContent = resposta.ok ? dados.mensagem : dados.erro;
  carregarTarefas();
}

async function excluirTarefa(id) {
  const resposta = await fetch(`/api/tarefas/${id}`, { method: "DELETE" });
  const dados = await resposta.json();
  mensagem.textContent = resposta.ok ? dados.mensagem : dados.erro;
  carregarTarefas();
}

formulario.addEventListener("submit", async evento => {
  evento.preventDefault();

  const descricao = campoDescricao.value.trim();
  if (!descricao) return;

  const resposta = await fetch("/api/tarefas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descricao })
  });

  const dados = await resposta.json();
  mensagem.textContent = resposta.ok ? "Tarefa cadastrada." : dados.erro;

  if (resposta.ok) {
    campoDescricao.value = "";
    carregarTarefas();
  }
});

carregarTarefas();
