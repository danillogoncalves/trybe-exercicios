let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let mean = 0;
let bigger = 0;

console.log('1.')

for (let i of numbers) {
    console.log(i);
}

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('2.')

for (let number of numbers) {
    sum += number;
}
console.log(sum);

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('3.')

console.log(mean = sum / numbers.length);

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('4.')

if (mean > 20) {
    console.log("valor maior que 20");
}
else {
    console.log('valor menor ou igual a 20');
}

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('5.')

for (let i =  0; i < numbers.length;i += 1) {
    if (numbers[i] > bigger) {
        bigger = numbers[i];
    }
}
console.log(bigger);

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('6.')