const readline = require('readline-sync');

// let acc = 0;

// for (let i = 6; i > 1; i -= 1) {
//   if (acc === 0) {
//       acc = i * (i -1);
//       console.log(acc);
//   } else {
//       acc = acc * (i - 1);
//       console.log(acc);
//   }
// }
function createArray(num) {
  const array = [];
  for (let i = num; i > 0; i -= 1) {
    array.push(i);
  }
  return array.reduce(function(acc, curr) {
    const result = acc * curr;
    return result;
  });;
}

function fatorial() {
  const answer = readline.questionInt('Digite um número inteiro para fazermos um Fatorial dele.\nDigite o número: ');
  const result = createArray(answer);
  console.log(`\nO Fatorial de ${answer} é ${result}!`);
}

fatorial();
