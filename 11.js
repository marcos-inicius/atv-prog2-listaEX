// 11. Orientada a objetos
class Produto {
  constructor(codigo, nome, preco, estoque) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
  adicionar(unidades) {
    if (unidades > 0) this.estoque += unidades;
  }
  retirar(unidades) {
    if (unidades <= 0 || unidades > this.estoque) return false;
    this.estoque -= unidades;
    return true;
  }
  alterarPreco(novoPreco) {
    if (novoPreco >= 0) this.preco = novoPreco;
  }
  valorEmEstoque() { return this.preco * this.estoque; }
}

const produtos = [
  new Produto(1, "Teclado", 120, 10),
  new Produto(2, "Mouse", 60, 20),
  new Produto(3, "Monitor", 900, 5)
];
produtos[0].adicionar(2);
produtos[1].retirar(3);
produtos[2].alterarPreco(850);
produtos.forEach(p => console.log(p, "Total:", p.valorEmEstoque()));
