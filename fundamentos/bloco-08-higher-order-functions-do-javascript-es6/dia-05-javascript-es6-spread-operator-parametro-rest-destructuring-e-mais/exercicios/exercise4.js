const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const { name, bornIn, nationality } = people;

const filterPeople1 = (array) => {
  return array
  .filter((element) => element.bornIn > 1900 && element.bornIn <= 2000 && element.nationality === 'Australian');
}

console.log(filterPeople1(people));

const filterPeople2 = (array) => {
  return array
  .filter(({ bornIn, nationality }) => bornIn > 1900 && bornIn <= 2000 && nationality === 'Australian');
}

console.log(filterPeople2(people));