// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);


// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };
// console.log(person);
// Object.assign(person, info, family);
// console.log(person);

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const close = Object.assign(person, lastName);

console.log(close);
console.log(person);