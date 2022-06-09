const fs = require('fs');

function writeFile(file, text) {
  fs.writeFileSync(file, text, { flag: 'wx' });
  return 'ok';
};

module.exports = writeFile;
const resposta = writeFile('./arquivo.txt', 'Olá Tryber!');

console.log(resposta);