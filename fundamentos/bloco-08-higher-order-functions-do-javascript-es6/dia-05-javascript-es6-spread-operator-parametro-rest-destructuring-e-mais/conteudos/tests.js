// const numbers = [1, 2, 3];
// console.log(numbers);

// numbers.push(4);

// console.log(numbers); // [1, 2, 3, 4]

// const carros = ['Gol', 'HB20', 'Focus'];
// const motos = ['Biz', 'R1'];

// const veiculos = ['F40', ...motos, 'Uno', ...carros].sort();

// console.log(veiculos);

// const conhecimentosTrybe = {
//   softSkills: true,
//   hardSkills: true,
//   trabalho: true,
// }

// const pessoa = {
//   nome: 'Nádia',
//   idade: '28',
//   cidade: 'BH',
// }

// const pessoaTryber = {
//   ...pessoa,
//   ...conhecimentosTrybe,
//   esporte: 'Corrida',
// }

// console.log(pessoaTryber);

// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];

// console.log(newArray);
// console.log(numbers);

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring]

// console.log(months);

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo));

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers));
// console.log(Math.min(...randomNumbers));

// const people = {
//   id: 101,
//   name: "Alysson",
//   age: 25,
// }

// const about = {
//   address: 'Av Getúlio Vargas, 1000',
//   occupation: 'Developer',
// }

// const customer = { ...people, ...about };

// console.log(customer);

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2));

// console.log(quantosParams('string', null, [1, 2, 3], { }));

// const sum = (...args) => args.reduce((acc, curr) => acc + curr);
// const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

// console.log(sum(4, 7, 8, 9, 60));

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// console.log(product.name);
// console.log(product.price);
// console.log(product.seller);

const { name } = product;

console.log(name);
