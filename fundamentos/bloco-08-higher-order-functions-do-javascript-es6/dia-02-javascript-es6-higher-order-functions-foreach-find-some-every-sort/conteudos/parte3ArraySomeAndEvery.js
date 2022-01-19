// Fixação 1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some(element => name === element);
}

console.log(hasName(names, 'Ana'))
