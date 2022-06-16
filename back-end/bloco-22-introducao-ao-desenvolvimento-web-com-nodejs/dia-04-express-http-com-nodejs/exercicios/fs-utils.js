const fs = require('fs/promises');

async function getSimpsons() {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(response);
}

async function setSimpsons(newSimpsons) {
  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = {
  getSimpsons,
  setSimpsons
}