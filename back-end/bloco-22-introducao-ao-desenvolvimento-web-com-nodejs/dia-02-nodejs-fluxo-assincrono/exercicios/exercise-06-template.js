const fs = require('fs/promises');
const readline = require('readline');

function question(message) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();

      resolve(answer);
    });
  });
}

async function selectFileToRead() {
  const select = await question('Escolha do arquivo que vocês quer ler: ');

  try {
    const readingFile = await fs.readFile(`./${select}`, 'utf-8');
    console.log(readingFile);
  } catch (err) {
    console.error(`Error: ${err.message} - Arquivo inexistente`);
  }
}

selectFileToRead();