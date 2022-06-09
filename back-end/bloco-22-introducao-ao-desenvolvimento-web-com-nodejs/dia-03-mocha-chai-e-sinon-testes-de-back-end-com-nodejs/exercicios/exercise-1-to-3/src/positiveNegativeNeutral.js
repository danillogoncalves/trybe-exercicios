function positiveNegativeNeutral(num) {
  try {
    if (num === 0) return 'neutro';
    if (num > 0) return 'positivo';
    if (num < 0) return 'negativo';
    throw new Error('o valor deve ser um número');
  } catch(err) {
    return err.message;
  }
};

const resposta = positiveNegativeNeutral('fdsfsf')

console.log(resposta);

module.exports = positiveNegativeNeutral;