const readline = require('readline-sync');

function centimeterToMeter(centimeter) {
  const meter = centimeter / 100;
  return meter;
}

function imcCalculation(weight, height) {
  const converted = centimeterToMeter(height);
  const result = weight / (converted ** 2);
  return result;
}

function imcAnswer() {
  const weight = readline.questionFloat('Qual seu peso em quilos? ');
  const height = readline.questionInt('Qual sua altura em centímetros? ');

  const imc = imcCalculation(weight, height);

  if (imc < 18.5) return console.log(`Seu IMC é ${imc.toFixed(2)}.\nE você está Abaixo do peso (magreza).`);
  if (imc >= 18.5 && imc < 25) return console.log(`Seu IMC é ${imc.toFixed(2)}.\nE você está no Peso normal.`);
  if (imc >= 25 && imc < 30) return console.log(`Seu IMC é ${imc.toFixed(2)}.\nE você está Acima do peso (sobrepeso).`);
  if (imc >= 30 && imc < 35) return console.log(`Seu IMC é ${imc.toFixed(2)}.\nE você está com Obesidade grau I.`);
  if (imc >= 35 && imc < 40) return console.log(`Seu IMC é ${imc.toFixed(2)}.\nE você está com Obesidade grau II.`);
  return console.log(`Seu IMC é ${imc.toFixed(2)}.\nE você está com Obesidade grau III e IV.`);
}

imcAnswer()

module.exports = imcAnswer;
