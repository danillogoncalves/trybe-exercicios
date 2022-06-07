function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

try {
  const result = dividirNumeros(2,2);
  console.log('Resultado %s', result)
} catch(err) {
  console.log('Erro: %s', err.message);
}
