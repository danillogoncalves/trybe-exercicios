const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser númericos');
  }
}

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
    // O parametro do catch pode ser qualquer nome
  } catch (error) {
    //  O .messagem é obrigatório nesse caso
    throw error.message;
  }
};

console.log(sum(2, '3'));