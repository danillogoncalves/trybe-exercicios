// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// console.table(Object.entries(coolestTvShow));

// itera graciosamente através de chave-valor (key-value)
// var obj = {a: 5, b: 7, c: 9};
// for (var [key, value] of Object.entries(obj)) {
//     console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
// }

const paises = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(paises);
// console.log(pairKeyValue);


for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
