// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'banana', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['1 lata de leite condensado', '1 lata de creme de leite', '1 medida da lata de suco de laranja'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ... additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
