const readline = require('readline-sync');

function fizzBuzzFizzBuzz(number) {
  return new Promise((resolve, reject) => {
    if (number % 3 === 0 && number % 5 === 0) return resolve('FizzBuzz');
    if (number % 3 === 0) resolve('Fizz');
    if (number % 5 === 0) return resolve('Buzz');
    return reject(number);
  });
}

async function testFizzBuzzFizzBuzz() {
  const number = readline.questionInt('Digite um número inteiro maior que zero(0): ');
  try {
    const response = await fizzBuzzFizzBuzz(number);
    console.log(response);
  } catch (err) {
    console.log(number);
  }
}

testFizzBuzzFizzBuzz();