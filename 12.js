// 12. Sistema orientado a objetos
class Pessoa {
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }
  apresentar() { return `Nome: ${this.nome} | Nascimento: ${this.dataNascimento}`; }
}

class Aluno extends Pessoa {
  constructor(nome, dataNascimento, matricula, curso, notas) {
    super(nome, dataNascimento);
    this.matricula = matricula;
    this.curso = curso;
    this.notas = notas;
  }
  calcularMedia() { return this.notas.reduce((s, n) => s + n, 0) / this.notas.length; }
  apresentar() { return `${super.apresentar()} | Matrícula: ${this.matricula} | Curso: ${this.curso} | Média: ${this.calcularMedia()}`; }
}

class Professor extends Pessoa {
  constructor(nome, dataNascimento, matricula, disciplina) {
    super(nome, dataNascimento);
    this.matricula = matricula;
    this.disciplina = disciplina;
  }
  apresentar() { return `${super.apresentar()} | Matrícula: ${this.matricula} | Disciplina: ${this.disciplina}`; }
}

const aluno = new Aluno("Ana", "2005-04-10", "A001", "Informática", [8, 9, 7]);
const professor = new Professor("Carlos", "1980-02-15", "P001", "Programação");
console.log(aluno.apresentar());
console.log(professor.apresentar());
