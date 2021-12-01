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

opeacoesAritimeticas(1, 2);
biggerNumber(1, 2);