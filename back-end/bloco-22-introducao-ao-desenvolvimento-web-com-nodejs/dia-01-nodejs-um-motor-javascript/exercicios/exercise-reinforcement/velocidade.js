const readline = require('readline-sync');

function averageSpeed(kilometer, hour) {
  const result = kilometer / hour;
  return result;
}

function questionSpeed() {
  const kilometer = readline.questionInt('Qual a distância em quilômetros? ');
  const hour = readline.questionInt('Qual o tempo de horas? ');

  const result = averageSpeed(kilometer, hour);

  return console.log(`\nA velocidade média é ${result.toFixed(2)}km/h.`);
}

questionSpeed();

module.exports = questionSpeed;
