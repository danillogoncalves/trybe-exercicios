let n = 5;
let line = n;
let baseTriangle = '';
let middle = 0

console.log('n = ' + n);
console.log('');
for (let i = 0; i < line; i += 0) {
    baseTriangle = '';
    for (let s = 0; s < n; s += 1) {
        if ((s < ((n/2)-0.5)- middle) || (s > ((n/2)-0.5) + middle)) {
            baseTriangle = baseTriangle + ' ';
        }
        else {
            baseTriangle = baseTriangle + '*';
        }
    }
    console.log(baseTriangle);
    middle += 1;
    line = line -2;
}
