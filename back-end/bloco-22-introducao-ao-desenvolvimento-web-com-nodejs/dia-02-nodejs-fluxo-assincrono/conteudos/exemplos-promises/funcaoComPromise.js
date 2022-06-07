function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não pode ser feito uma divisão por zero'));

    const result = num1 / num2;
    resolve(result);
  });

  return promise;
}

dividirNumeros(2, 0)
  .then(result => console.log(`Sucesso: ${result}`))
  .catch(err => console.log(`Erro: ${err.message}`));