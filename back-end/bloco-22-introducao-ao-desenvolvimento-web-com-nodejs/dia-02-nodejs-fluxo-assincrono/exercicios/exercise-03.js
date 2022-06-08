function sumAndMultiplication(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      return reject(new Error('Informe apenas números'));
    }
    const result = (num1 + num2) * num3;
    if (result < 2000) {
      return reject(new Error('Valor muito baixo'));
    }
    return resolve(result);
  });
}
function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
};

async function main() {
  try {
    const result = await sumAndMultiplication(randomNumber(), randomNumber(), randomNumber());
    console.log(result);
  } catch(err) {
    console.error(err.message);
  }
}

main();
