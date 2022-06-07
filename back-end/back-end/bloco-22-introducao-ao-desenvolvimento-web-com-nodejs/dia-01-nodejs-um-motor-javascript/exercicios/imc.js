const { questionInt, questionFloat } = require('readline-sync');

function categoryIMC() {
  const weight = questionInt('Qual seu peso em quilos? ');
  const heigth = questionFloat('Qual sua altura em metros e centimetros? ')

  const result = weight / (heigth ** 2);

  console.log(`Seu IMC é ${result.toFixed(2)}!`)
  if (result < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  };

  if (result >= 18.5 && result < 25) {
    console.log('Peso normal');
    return;
  };

  if (result >= 25 && result < 30) {
    console.log('Acima do peso (sobrepeso)');
    return;
  };

  if (result >= 30 && result < 35) {
    console.log('Obesidade grau I');
    return;
  };

  if (result >= 35 && result < 40) {
    console.log('Obesidade grau II');
    return;
  };

  console.log('Obesidade graus III e IV');
};

module.exports = categoryIMC;
