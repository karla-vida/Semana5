import { Pedido } from "./pedido.js";
import { Produto } from "./produto.js";
import { elementPedido } from "./dom.js";

const prod1 = new Produto("Colar", 10_000, true, 1);
const prod2 = new Produto("Brinco", 1_000, false, 0);
const prod3 = new Produto("Pingente", 500, true, 2);
const prod4 = new Produto("Anel", 5_000, true, 1);
const prod5 = new Produto("Pulseira", 6_000, true, 5);

const pdKarla = new Pedido("20220001", "Karla");
const pdAlessandro = new Pedido("20220002", "Alessandro");

pdKarla.adicionarProduto(prod2);
pdKarla.adicionarProduto(prod5);
pdAlessandro.adicionarProduto(prod1);

pdAlessandro.adicionarProduto(prod3);
pdAlessandro.adicionarProduto(prod4);

const pedidos = [pdKarla, pdAlessandro];
const pedidosEl = document.getElementById("pedidos");

pedidos.forEach((pedido) => {
  pedidosEl.appendChild(elementPedido(pedido));
});