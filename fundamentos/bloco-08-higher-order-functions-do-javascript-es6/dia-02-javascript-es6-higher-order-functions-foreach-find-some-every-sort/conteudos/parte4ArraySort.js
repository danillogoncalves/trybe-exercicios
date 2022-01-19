const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
const descendingOrder = (array, key) => array.sort((a, b) => b[key] - a[key]);

descendingOrder(people, 'age');

console.log(people);
