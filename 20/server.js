// 20. Sistema Web Cliente-Servidor - Servidor e API
// Instalação: npm install
// Execução: npm start
// Acesse: http://localhost:3000

const express = require("express");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const db = new Database("tarefas.db");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

db.exec(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    concluida INTEGER NOT NULL DEFAULT 0
  )
`);

// Classe utilizada para representar uma tarefa.
class Tarefa {
  constructor(descricao, concluida = false) {
    this.descricao = descricao;
    this.concluida = concluida;
  }
}

// GET: listar tarefas.
app.get("/api/tarefas", (req, res) => {
  const tarefas = db.prepare("SELECT * FROM tarefas ORDER BY id DESC").all();
  res.json(tarefas);
});

// POST: cadastrar tarefa.
app.post("/api/tarefas", (req, res) => {
  const descricao = String(req.body.descricao || "").trim();

  if (!descricao) {
    return res.status(400).json({ erro: "Descrição obrigatória." });
  }

  const tarefa = new Tarefa(descricao);
  const resultado = db
    .prepare("INSERT INTO tarefas (descricao, concluida) VALUES (?, ?)")
    .run(tarefa.descricao, 0);

  res.status(201).json({
    id: resultado.lastInsertRowid,
    descricao: tarefa.descricao,
    concluida: 0
  });
});

// PUT: alterar tarefa.
app.put("/api/tarefas/:id", (req, res) => {
  const descricao = String(req.body.descricao || "").trim();
  const concluida = req.body.concluida ? 1 : 0;

  if (!descricao) {
    return res.status(400).json({ erro: "Descrição obrigatória." });
  }

  const resultado = db
    .prepare("UPDATE tarefas SET descricao = ?, concluida = ? WHERE id = ?")
    .run(descricao, concluida, req.params.id);

  if (!resultado.changes) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  res.json({ mensagem: "Tarefa atualizada." });
});

// DELETE: excluir tarefa.
app.delete("/api/tarefas/:id", (req, res) => {
  const resultado = db
    .prepare("DELETE FROM tarefas WHERE id = ?")
    .run(req.params.id);

  if (!resultado.changes) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  res.json({ mensagem: "Tarefa excluída." });
});

app.listen(3000, () => {
  console.log("Servidor em http://localhost:3000");
});
