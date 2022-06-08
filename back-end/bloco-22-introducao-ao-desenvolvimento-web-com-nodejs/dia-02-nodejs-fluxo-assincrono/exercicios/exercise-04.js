const simpsons = require('./simpsons.json');
const simpsonFamily = require('./simpsonFamily.json');

const fs = require('fs').promises;

function theSimpsons(array) {
  const result = array.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

function searchByIdSimposons(numId) {
  return new Promise((resolve, reject) => {
    const idExists = simpsons.some(({ id }) => numId == id);
    if (!idExists) {
      return reject(new Error('id não encontrado'));
    }
    const idObject = simpsons.find(({id}) => numId == id);
    return resolve(`${idObject.id} - ${idObject.name}`);
  });
};

async function mainFour(id) {
  try {
    const result = await searchByIdSimposons(id);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

async function rewriteObject() {
  const newArray = simpsons.filter(({ id }) => +id !== 10 && +id !== 6);
  try {
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
    console.log('Arquivo editado.');
  } catch (err) {
    console.error(`Erro ${err.message}`);
  }
}

async function newWriteObject() {
  const newArray = simpsons.filter(({ id }) => +id === 1 || +id === 4);
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray), { flag: 'wx' });
    console.log('Arquivo editado.');
  } catch (err) {
    console.error(`Erro ${err.message}`);
  }
}

async function addPerson() {
  const newArray = simpsons.filter(({ id }) => +id === 1 || +id === 4);
  const person = simpsons.find(({ name }) => name === 'Nelson Muntz');
  console.log(person);
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify([ ...newArray, person ]), { flag: 'w' });
    console.log('Arquivo editado.');
  } catch (err) {
    console.error(`Erro ${err.message}`);
  }
} 

async function changePerson() {
  const newArray = simpsonFamily.filter(({ name }) => name !== 'Nelson Muntz');
  const person = simpsons.find(({ name }) => name === 'Maggie Simpson');
  console.log(person);
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify([ ...newArray, person ]), { flag: 'w' });
    console.log('Arquivo editado.');
  } catch (err) {
    console.error(`Erro ${err.message}`);
  }
}

theSimpsons(simpsons);
mainFour(8);
rewriteObject();
newWriteObject();
addPerson();
changePerson();
