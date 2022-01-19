// Fixação 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find(number => number % 3 === 0 && number % 5 === 0);
};

// const findDivisibleBy3And5 = () => numbers.find(number => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5())

// Fixação 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find(element => element.length === 5);
};

console.log(findNameWithFiveLetters());

// Fixação 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find(element => element.id === id);
}

console.log(findMusic('31031686'))
