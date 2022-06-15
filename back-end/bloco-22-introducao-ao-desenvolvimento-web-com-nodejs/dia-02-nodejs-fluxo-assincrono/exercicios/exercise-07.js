const fs = require('fs/promises');
const readline = require('readline-sync');

function seeIfWordExists(file) {
  const work = readline.question('Qual palavra deseja substituir? ');
  if(!file.includes(work)) {
    console.log('Digite uma palavra existe no arquivo!');
    seeIfWordExists(file);
  };
  return work;
}

async function newFileDestination(string) {
  const fileDestinayion = readline.question('Qual o nome do novo arquivo? (Sem a extensão!) ');
  try {
    await fs.writeFile(`./${fileDestinayion}.txt`, string, { flag: 'wx' });
    console.log('Novo arquivo salvo com sucesso!');
  } catch (err) {
    console.error('Não poder sobrecrever outro arquivo!');
    newFileDestination(string)
  }
}

async function replaceWordsInFile() {
  const chosenFile = readline.question('Digite o nome do arquivo: (Sem a extensão!) ');
  let fileName;
  try {
    fileName = await fs.readFile(`./${chosenFile}.txt`, 'utf-8');
    console.log(fileName);
  } catch (err) {
    return console.error(`Error: ${err.message} - Arquivo inexistente`);
  }

  const wordToBeReplaced = seeIfWordExists(fileName);
  const wordThatReplace = readline.question('Qual palavra vai ficar no lugar? ');
  const newPhrase = fileName.replace( new RegExp(wordToBeReplaced, 'g'), wordThatReplace);
  console.log(newPhrase);
  newFileDestination(newPhrase);
}

replaceWordsInFile();