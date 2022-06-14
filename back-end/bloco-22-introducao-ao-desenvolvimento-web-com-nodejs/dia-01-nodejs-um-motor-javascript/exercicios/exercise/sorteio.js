const { questionInt, question } = require('readline-sync');

function playAgain() {
  const query = question('Gostaria de jogar novamente? (Y/N) ');
  const queryUperCase = query.toUpperCase();
  switch(queryUperCase) {
    case 'Y':
      luckyGame();
      break;
    case 'N':
      console.log('Áte a próxima');
      break;
    default:
      console.log('Responda "Y" ou "N"!');
      playAgain();
  }
}

function luckyGame() {
  const guess = questionInt('Qual é o número que vai ser sorteado entre 1 e 10? ');

  const sortition = Math.ceil(Math.random() * 10);

  if (guess === sortition) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez, o número é ${sortition}!`);
  };

  playAgain();
}

module.exports = luckyGame;