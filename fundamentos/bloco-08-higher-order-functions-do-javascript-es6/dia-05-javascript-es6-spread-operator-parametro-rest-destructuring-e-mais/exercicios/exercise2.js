// escreva sum abaixo
const sum1 = (...args) => args.reduce((acc, curr) => acc + curr);

const sum2 = (...args) => args.reduce((acc, curr) => acc + curr, 0);

const sum3 = (...args) => {
  return args.reduce((acc, curr) => {
    return acc + curr;
  })
};

const sum4 = (...args) => {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
};

console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(sum3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(sum4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
