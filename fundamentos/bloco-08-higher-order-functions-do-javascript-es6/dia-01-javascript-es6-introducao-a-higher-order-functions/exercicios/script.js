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
