const readline = require('readline-sync');

function fibonacci(length, num) {
  let a = 1;
  let b = 1;
  const array = [ 1 ];
  
  for (let i = 1; i < length; i += 1) {
    array.push(b);
    const c = a;
    a = b;
    b = a + c;
  }
  
  return {
    length: array,
    numberPosition: array[num -1],
  }
}

function fibonacciQuestion() {
  const lengthF = readline.questionInt('Qual o tamanho da sequência de Fibonacci você quer: ');
  if (lengthF === 1) {
    const { length } = fibonacci(lengthF, lengthF);
    return console.log(`Sequência de Fibonacci:\n${length}\n`);
  }
  const numberPositionF = readline.questionInt('Diga um a posição na sequência de Fibonacci: ');
  const { length, numberPosition } = fibonacci(lengthF, numberPositionF);
  return console.log(`Sequência de Fibonacci:\n${length}\nNa posição ${numberPositionF} o número é ${numberPosition}`);
}

fibonacciQuestion();
