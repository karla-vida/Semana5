import { Produto } from "./Produto.js";
export class Pedido {
  constructor(numPedido, nomeCliente) {
    this.numeroPedido = numPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date().toLocaleDateString();
    this.estaPago = false;
    this.listaProdutos = [];
  }
}

adicionarProduto(produto) {
    const ehProduto = produto instanceof Produto;
    if (ehProduto) {
      this.listaProdutos.push(produto);
    }
  }