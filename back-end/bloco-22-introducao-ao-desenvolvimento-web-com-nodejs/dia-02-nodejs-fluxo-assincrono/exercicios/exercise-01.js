function sumAndMultiplication(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      return reject(new Error('Informe apenas números'));
    }
    const result = (num1 + num2) * num3;
    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }
    return resolve(result);
  });
}

sumAndMultiplication('pedrinho', 20, 1)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
