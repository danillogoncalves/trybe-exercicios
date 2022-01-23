const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const gradeAvarage = (acc, curr) => acc + curr;

function studentAverage() {
  // escreva seu código aqui
  return students.map((name, index) => ({ name: name ,average: (grades[index]
    .reduce(gradeAvarage) / grades[index].length)
  }));
}

console.log(studentAverage());
