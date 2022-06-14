const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const imc = require('./imc');
const { questionInt } = require('readline-sync');

console.log('Velocidade média (1)\nCaluculo de IMC (2)\nJogo de adivinhação (3)');
const result = questionInt('Escolha a sua atividade: ');

function questionOptions() {
  switch (result) {
    case 1:
      velocidade();
      break;
    case 2:
      imc();
      break;
    case 3:
      sorteio();
      break;
    default:
      console.log('Escolha inválida, tente outra vez.')
      questionOptions();
  }
};

questionOptions();


// const readline = require('readline-sync');

// const scripts = [
//   { name: 'Calcular IMC', path: './imc.js' },
//   { name: 'Calcular velocidade média', path: './velocidade.js' },
//   { name: 'Jogo de adivinhação', path: './sorteio.js' },
// ];

// function escolherScript() {
//   const enunciado = 'Escolha um número para executar o script correspondente\n';
//   const mensagem = scripts
//     .reduce((message, script, index) => `${message}${index + 1} - ${script.name}\n`, enunciado);

//   const numeroEscolhido = readline.questionInt(mensagem) - 1;

//   const script = scripts[numeroEscolhido];

//   return script;
// }

// function main() {
//   const script = escolherScript();

//   if (!script) return console.log('Número inválido. Saindo');

//   require(script.path);
// }

// main();