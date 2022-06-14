const readline = require('readline-sync');

function randonNumber() {
  return Math.floor(Math.random() * 11);
}

function answerContinue(callback) {
  const answer = readline.question('Gostaria de jogar novamente? (Y/N) ');
  const yesNo = answer.toUpperCase();

  switch (yesNo) {
    case 'Y':
    case 'YES':
      callback();
      break;
    case 'N':
    case 'NO':
      console.log('Até a prxima.');
      break;
    default:
      console.log('Digite "Y/YES" ou "N/NO".');
      answerContinue(callback);
  };
}

function sortition() {
  const hiddenNumber = randonNumber();
  const shot = readline.questionInt('Tente acertar o número de 0 a 10.\nQual seu palpite? ');

  if (shot === hiddenNumber) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez.\nO número era ${hiddenNumber}.`);
  }

  answerContinue(sortition)
}

sortition()

module.exports = sortition;
