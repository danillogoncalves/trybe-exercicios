// Exercício 1

const createEmail = (name) => `${name.toLowerCase().replaceAll(' ', '_')}@trybe.com`;
// const createEmail = (name) => `${name.toLowerCase().split(' ').join('_')}@trybe.com`;

const employeesInfo = (name, callback) => {
  const info = { nome: name, email: callback(name)};
  return info;
};

const newEmployees = () => {
  const employees = {
    id1: employeesInfo('Pedro Guerra', createEmail), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeesInfo('Luiza Drumond', createEmail), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeesInfo('Carla Paiva', createEmail), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

// Exercício 2

const checkBet = (bet, luck) => bet === luck ? 'Parabéns você ganhou' : 'Tente novamente';

const sortition = (bet, callback) => {
  const luck = Math.ceil(Math.random() * 5);
  return callback(bet, luck);
}
console.log(sortition(3, checkBet));

// Exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// Lalá Nametala - Turma 19 - Tribo A me ajudou a melhorar minha lógica
const feedbackCheck = (template, feedback) => {
  let note = 0;
  for (let index = 0; index < feedback.length; index += 1) {
    if (feedback[index] === template[index]) {
      note += 1
    } else if (feedback[index] !== 'N.A') {
      note -= 0.5;
    }
  }
  return note;
}

const giveTheNote = (template, feedback, callback) => callback(template, feedback);

console.log(giveTheNote(RIGHT_ANSWERS, STUDENT_ANSWERS, feedbackCheck));
