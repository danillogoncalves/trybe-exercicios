const fs = require('fs/promises');

async function createFiles() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  strings
    .forEach((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ]

  const readFiles = await Promise.all(
    files
      .map((file) => fs.readFile(file, 'utf-8'))
    );

  const arrayToString = readFiles.join(' ');


  fs.writeFile('./fileAll.txt', arrayToString);
}

createFiles();
