/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = [];

for (let i = 0; i < numbers.length; i += 1) {
    // if (typeof numbers[i+1] === 'undefined') {
    // if (i == numbers.length -1) {
    if (!numbers[i+1]) {
        novo.push(numbers[i]*2);
    } 
    else {
    novo.push(numbers[i]*numbers[i+1]);
    }
}

console.log(novo); */

let numbers = [];
let resultado;
let position;
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index <= array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index] > array[secondIndex]) {
        position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position; 
    }

    resultado = array[index] * position; 
    numbers.push(resultado);

    }

}

console.log(numbers) 