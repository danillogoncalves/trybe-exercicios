let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i == numbers.length -1) {
        novo.push(numbers[i]*2);
    } 
    else {
    novo.push(numbers[i]*numbers[i+1]);
    }
}

console.log(novo);