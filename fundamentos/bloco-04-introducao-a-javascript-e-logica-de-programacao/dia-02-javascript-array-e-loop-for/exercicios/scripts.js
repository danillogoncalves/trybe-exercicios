let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let mean = 0;
let bigger = 0;
let smaller = 0;
let even = false;

console.log('1.');

for (let i of numbers) {
    console.log(i);
}

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('2.');

for (let number of numbers) {
    sum += number;
}
console.log(sum);

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('3.');

console.log(mean = sum / numbers.length);

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('4.');

if (mean > 20) {
    console.log("valor maior que 20");
}
else {
    console.log('valor menor ou igual a 20');
}

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('5.');

for (let i =  0; i < numbers.length;i += 1) {
    if (numbers[i] > bigger) {
        bigger = numbers[i];
    }
}
console.log(bigger);

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('6.');

for (let i = 0; i < numbers.length;i += 1) {
    if (numbers[i] % 2 == 1) {
        even = true;
        break;
    }
}

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 == 1) {
        console.log(numbers[i]);
    }
}
if (even == false) {
    console.log("nenhum valor ímpar encontrado");
}
console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('7.');
smaller = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
    if (smaller > numbers[i]) {
        smaller = numbers[i];
    }
}
console.log(smaller);

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('8.');
let score = [];
for (let i = 1; i <= 25; i += 1) {
    score.push(i);
}
console.log(score);

console.log('-*-*-*-*-*-*-*-*-*-*-');

console.log('9.');

for (let number of numbers) {
    console.log(number / 2);
}

console.log('-*-*-*-*-*-*-*-*-*-*-');