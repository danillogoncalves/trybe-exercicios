const tableBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multiplicationTable = (number) => tableBase.map((baseNumber) => `${number} vezes ${baseNumber} = ${number * baseNumber}`);

// // console.log(multiplicationTable(7));

// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]

const even = tableBase.filter((number) => (number % 2 === 0)).map((number) => `${number} é par!`);

console.log(even);