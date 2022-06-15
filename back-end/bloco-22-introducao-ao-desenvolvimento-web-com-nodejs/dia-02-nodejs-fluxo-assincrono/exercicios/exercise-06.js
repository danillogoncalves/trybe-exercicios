const fs = require('fs/promises');
const readline = require('readline-sync');

async function selectFileToRead() {
  const select = readline.question('Escolha do arquivo que vocês quer ler: ');

  try {
    const readingFile = await fs.readFile(`./${select}`, 'utf-8');
    console.log(readingFile);
  } catch (err) {
    console.error(`Error: ${err.message} - Arquivo inexistente`);
  }
}

selectFileToRead();