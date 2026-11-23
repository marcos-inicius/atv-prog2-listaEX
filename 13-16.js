// 13 a 16. Banco de dados da biblioteca (SQL)
// Execute os comandos em um banco SQLite. Os exercícios 13, 14, 15 e 16 usam as mesmas tabelas.

const criarTabelas = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS autores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS livros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  autor_id INTEGER NOT NULL,
  ano INTEGER,
  disponivel INTEGER NOT NULL DEFAULT 1,
  FOREIGN KEY (autor_id) REFERENCES autores(id)
);

CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS emprestimos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  livro_id INTEGER NOT NULL,
  usuario_id INTEGER NOT NULL,
  data_emprestimo TEXT NOT NULL,
  data_devolucao TEXT,
  FOREIGN KEY (livro_id) REFERENCES livros(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
`;

// 14. INSERT e SELECT
const inserirDados = `
INSERT INTO autores (nome) VALUES
('Machado de Assis'), ('Clarice Lispector'), ('José de Alencar');

INSERT INTO livros (titulo, autor_id, ano, disponivel) VALUES
('Dom Casmurro', 1, 1899, 1),
('Memórias Póstumas de Brás Cubas', 1, 1881, 1),
('A Hora da Estrela', 2, 1977, 0),
('Laços de Família', 2, 1960, 1),
('Iracema', 3, 1865, 0);

INSERT INTO usuarios (nome, email) VALUES
('João Silva', 'joao@email.com'),
('Maria Souza', 'maria@email.com'),
('Pedro Lima', 'pedro@email.com');

INSERT INTO emprestimos (livro_id, usuario_id, data_emprestimo, data_devolucao) VALUES
(3, 1, '2026-01-10', NULL),
(5, 2, '2026-01-12', '2026-01-20'),
(1, 3, '2026-01-15', NULL);

-- Todos os livros
SELECT * FROM livros;

-- Título e autor
SELECT livros.titulo, autores.nome AS autor
FROM livros JOIN autores ON livros.autor_id = autores.id;

-- Livros de determinado autor
SELECT livros.titulo FROM livros
JOIN autores ON livros.autor_id = autores.id
WHERE autores.nome = 'Machado de Assis';

-- Livros em ordem alfabética
SELECT * FROM livros ORDER BY titulo ASC;

-- Livros disponíveis
SELECT * FROM livros WHERE disponivel = 1;
`;

// 15. UPDATE e DELETE
const atualizarExcluir = `
UPDATE usuarios SET nome = 'João da Silva' WHERE id = 1;
UPDATE livros SET disponivel = 1 WHERE id = 3;
UPDATE emprestimos SET data_devolucao = '2026-02-01' WHERE id = 1;

-- Excluir registros relacionados pode ser impedido pela chave estrangeira.
-- Primeiro exclua os empréstimos relacionados, se a intenção for remover o usuário/livro.
DELETE FROM emprestimos WHERE usuario_id = 2;
DELETE FROM usuarios WHERE id = 2;

DELETE FROM emprestimos WHERE livro_id = 5;
DELETE FROM livros WHERE id = 5;
`;

// 16. Consultas relacionando tabelas
const consultasRelacionadas = `
-- Nome do usuário e título do livro emprestado
SELECT usuarios.nome, livros.titulo
FROM emprestimos
JOIN usuarios ON emprestimos.usuario_id = usuarios.id
JOIN livros ON emprestimos.livro_id = livros.id;

-- Todos os empréstimos
SELECT * FROM emprestimos;

-- Empréstimos ainda não devolvidos
SELECT * FROM emprestimos WHERE data_devolucao IS NULL;

-- Quantidade de empréstimos por usuário
SELECT usuarios.nome, COUNT(emprestimos.id) AS quantidade
FROM usuarios
LEFT JOIN emprestimos ON usuarios.id = emprestimos.usuario_id
GROUP BY usuarios.id, usuarios.nome;

-- Livros nunca emprestados
SELECT livros.titulo FROM livros
LEFT JOIN emprestimos ON livros.id = emprestimos.livro_id
WHERE emprestimos.id IS NULL;
`;

console.log("Arquivo contém os comandos SQL dos exercícios 13 a 16.");
console.log("Ordem de execução: criarTabelas, inserirDados, atualizarExcluir e consultasRelacionadas.");
