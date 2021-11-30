let n = 5;
let triangle = '';
let crescent = 1;

for (let i = 0; i < n; i += 1) {
    triangle = '';
    for (let s = 0; s < crescent; s += 1) {
        triangle = triangle + '*';
    }
    console.log(triangle);
    crescent += 1
    if (crescent === n + 1) {
        break
    }
}