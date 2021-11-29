let a = 3;
let b = 4;
const num1 = 50;
const num2 = 23;
const num3 = 80;
const num4 = -10;
const ang1 = 60;
const ang2 = 60;
const ang3 = 60;
const angSum = ang1 + ang2 + ang3;
let piece = "Cavalo";

console.log("1.");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log("____________________");
console.log("2.");
if (num1 > num2) {
    console.log(num1);
}
else {
    console.log(num2);
}
console.log("____________________");

console.log("3.");
if (num1 > num2 && num1 > num3) {
    console.log(num1)
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else if (num3 > num1 && num3 > num2) {
    console.log(num3)
}
console.log("____________________");

console.log("4.");
if (num4 >= 0) {
    console.log("positive");
}
else {
    console.log("negative")
}
console.log("____________________");

console.log("5.");
if (angSum == 180) {
    console.log(true);
} 
else if (angSum < 0) {
    console.log("Ângulo inválido.")
} else {
    console.log(false)
}
console.log("____________________");

console.log("6.");
switch (piece.toLowerCase()) {
    case "peao":
        console.log("Um para frente.");
        break;
    case "torre":
        console.log("Vertical e horizontal.");
        break;
    case "bispo":
        console.log("Diagonal");
        break;
    case "cavalo":
        console.log("Em L");
        break;
    case "rainha":
        console.log("Vertical, horizontal e diagonal.");
        break;
    case "rei":
        console.log("Vertical, horizontal e diagonal, mais no uma casa.");
        break;
    default:
        console.log("Não exite essa peça no xadrez.")
}
console.log("____________________");