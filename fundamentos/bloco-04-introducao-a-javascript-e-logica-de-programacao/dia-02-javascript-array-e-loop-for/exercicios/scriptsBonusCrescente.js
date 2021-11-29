let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i1 = 1; i1 < numbers.length; i1 += 1) {
    for (let i2 = 0; i2 < numbers.length; i2 += 1) {
        if (numbers[i1] < numbers[i2]) {
            let valorI1 = numbers[i1];
            numbers[i1] = numbers[i2];
            numbers[i2] = valorI1;
        }
    }
}

console.log(numbers);