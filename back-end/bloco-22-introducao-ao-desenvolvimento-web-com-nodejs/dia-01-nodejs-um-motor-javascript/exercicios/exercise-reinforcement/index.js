const readline = require('readline-sync');

function resolution(num, callback) {
  switch (num) {
    case 1:
      require('./imc');
      break;
    case 2:
      require('./velocidade');
      break;
    case 3:
      require('./velocidade');
      break;
    case 4:
      require('../bonus-exercise/fatorial');
      break;
    case 5:
      require('../bonus-exercise/fibonacci');
      break;
    default:
      console.log('Digite um número correto do script que você quer rodar!');
      callback();
  }
}

function hub() {
  console.log('Qual o scrpt você gostaria de rodar?\n');
  console.log('[1] Calcule seu IMC;\n[2] Calcule a velocidade média;\n[3] Teste a sua sorte;\n[4] Calcule o Fatorial;\n[5] Sequência de Fibonacci;\n');
  const chooseTheScripts = readline.questionInt('Escolha o seu número escolhido? ');

  resolution(chooseTheScripts, hub);
}

hub();
