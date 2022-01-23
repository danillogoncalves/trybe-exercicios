const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Raphael Martins - Turma 19 - Tribo A me ajudou a expressão regular
function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => acc + curr.match(/a/ig).length, 0);
}


// Gabarito do course
// function containsA() {
//   return names.reduce((acc, curr) =>
//      acc + curr.split('').reduce((acumulator, current) => {
//         if (current === 'a' || current === 'A') return acumulator + 1;
//         return acumulator;
//      }, 0), 0);
// }

console.log(containsA());