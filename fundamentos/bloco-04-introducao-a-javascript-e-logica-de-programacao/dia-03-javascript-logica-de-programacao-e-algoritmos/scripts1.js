let n = 5;
let square = ''

console.log('n = ' + n);
console.log('');
for (let i = 0; i < n; i += 1) {
    square = '';
    for (let s = 0; s < n; s += 1) {
        square = square + '*';
    }
    console.log(square);
}