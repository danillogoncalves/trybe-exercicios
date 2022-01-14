const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listaDeSkills = (estudante) => {
  for (let key in estudante) {
    console.log(`${key}, Nível:: ${estudante[key]};`)
  }
}

console.log('Estudande 1:')
listaDeSkills(student1);

console.log('Estudande 2:')
listaDeSkills(student2);


const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]};`)
  }
}

console.log('Estudande 1:')
listSkills(student1);

console.log('Estudande 2:')
listSkills(student2);
