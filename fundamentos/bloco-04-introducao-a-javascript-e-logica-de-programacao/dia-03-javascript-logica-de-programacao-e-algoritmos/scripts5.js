const n = 7;
let hollowTriangle = '';
let line = n;
let middle = 0;
let final = 0;

console.log('n = ' + n);
console.log('');
for (let i = 0; i < line; i += 0) {
    hollowTriangle = '';
    for (let s = 0; s < n; s += 1) {
        if ((s < ((n/2)-0.5)- middle) || (s > ((n/2)-0.5) + middle)) {
            hollowTriangle = hollowTriangle + ' ';
        }
        else if ((s === ((n/2)-0.5) - middle) || (s === ((n/2)-0.5) + middle)) {
            hollowTriangle = hollowTriangle + '*';
        }
        else {
            hollowTriangle = hollowTriangle + ' ';
        }
    }
    console.log(hollowTriangle);
    middle += 1;
    line = line -2;
}