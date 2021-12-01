function opeacoesAritimeticas(num1, num2) {
    console.log('1.)');
    console.log('');
    let sum = num1 + num2;
    console.log(sum);
    let subtraction = num1 - num2;
    console.log(subtraction);
    let multiplication = num1 * num2;
    console.log(multiplication);
    let division = num1 / num2;
    console.log(division);
    let module = num1 % num2;
    console.log(module);
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
};

function biggerNumber(num1, num2) {
    console.log('2.)');
    console.log('');
    if (num1 > num2) {
        console.log(num1 + ' é o maior número.')
    }
    else if (num1 === num2) {
        console.log('Os dois números são iguais.')
    }
    else {
        console.log(num2 + ' é o maior número.')
    }
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
};

function thirdLargestNumber (num1, num2, num3) {
    console.log('3.)');
    console.log('');
    if (num1 > num2 && num1 > num3) {
        console.log(num1 + ' é o maior número.');
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2 + ' é o maior número.');
    }
    else if (num3 > num1 && num3 > num2) {
        console.log(num3 + ' é o maior número.');
    }
    else {
        console.log('Temos números maiores iguais.')
    }
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
};

function positiveNegativeZero(num) {
    console.log('4.)');
    console.log('');
    if (num > 0) {
        console.log(num + ' é positivo.');
    }
    else if (num < 0) {
        console.log(num + ' é nevativo.');
    }
    else {
        console.log('Esse número é zero.');
    }
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
};

function threeAngleTriangle (ang1, ang2, ang3) {
    console.log('5.)');
    console.log('');
    let angleTriangle = false;
    let sumAng = ang1 + ang2 + ang3;
    if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
        console.log('Ângulo inválido, nenhum ângulo pode ser negativo!')
    }
    else if (sumAng === 180) {
        angleTriangle = true;
        console.log(angleTriangle);
    }
    else {
        console.log(angleTriangle);
    }
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
};

opeacoesAritimeticas(1, 2);
biggerNumber(1, 2);
thirdLargestNumber(1, 2, 3);
positiveNegativeZero(-5);
threeAngleTriangle(-60,60,60);