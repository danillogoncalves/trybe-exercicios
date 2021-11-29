let a = 3;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const num1 = 50;
const num2 = 23;
const num3 = 80;
const num4 = -10;
const ang1 = 60;
const ang2 = 60;
const ang3 = 60;
const angSum = ang1 + ang2 + ang3
let piece = "Cavalo"



if (num1 > num2) {
    console.log(num1);
}
else {
    console.log(num2);
}


if (num1 > num2 && num1 > num3) {
    console.log(num1)
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else if (num3 > num1 && num3 > num2) {
    console.log(num3)
}

if (num4 >= 0) {
    console.log("positive");
}
else {
    console.log("negative")
}

if (angSum == 180) {
    console.log(true);
} 
else if (angSum < 0) {
    console.log("Ângulo inválido.")
} else {
    console.log(false)
}

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