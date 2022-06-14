const { questionFloat } = require('readline-sync');

// const DISTANCE = 100
// const TIME = 4

function speedCalculation(DISTANCE, TIME) {
  const result = DISTANCE / TIME;
  return result;
};

function message() {
  const distance = questionFloat('Qual a distância em quilomêtros? ');
  const time = questionFloat("Qual o tempo em horas? ")

  const result = speedCalculation(distance, time);

  console.log(`Velocidade média é ${result} km/h.`)
}

module.exports = message;
