let n = 5;
let mirrorTriangle = ''
let room = 1

console.log('n = ' + n);
console.log('');
for (let i = 0; i < n; i += 1) {
    mirrorTriangle = '';
    for (let s = 0; s < n; s += 1) {
        if (s < n -room) {
            mirrorTriangle = mirrorTriangle + ' ';
        }
        else {
            mirrorTriangle = mirrorTriangle + '*';
        }
    }
    console.log(mirrorTriangle);
    room += 1;
}