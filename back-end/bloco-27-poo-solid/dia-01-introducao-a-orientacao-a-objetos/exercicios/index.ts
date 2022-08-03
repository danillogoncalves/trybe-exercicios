import Client from "./Client";
import Order from "./Order";
import Product from "./Product";

const client = new Client('Danillo');
const sandwich = new Product('Sanduíche Natural', 5);
const juice = new Product('Suco de Abacaxi', 5);
const dessert = new Product('Gelatina de Uva', 2.5);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());