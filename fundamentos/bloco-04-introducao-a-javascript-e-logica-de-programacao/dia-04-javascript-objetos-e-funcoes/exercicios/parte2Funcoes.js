function palindrome(word) {
    console.log('1.>');
    console.log('')
    let reverseWord = word.toUpperCase().split("").reverse().join("");
    let testPalindrome = false;
    if (word.toUpperCase() === reverseWord) {
        testPalindrome = true;
    }
    return testPalindrome;
};

function biggerIndexValue(array) {
    console.log('____________________________');
    console.log('2.>');
    console.log('');
    let biggerIndex = 0;
    let biggerValue = array[0];
    for (let i = 1; i < array.length; i += 1) {
        if (biggerValue < array[i]) {
            biggerIndex = i;
        }
    }
    return biggerIndex;
}

function smallerIndexValue(array) {
    console.log('____________________________');
    console.log('3.>');
    console.log('');
    let smallerIndex = 0;
    let smallerValue = array[0];
    for (let i = 1; i < array.length; i += 1) {
        if (smallerValue > array[i]) {
            smallerIndex = i;
        }
    }
    return smallerIndex;
}

function biggerNameCharacters(array) {
    console.log('____________________________');
    console.log('4.>');
    console.log('');
    let nameSize = array[0].length;
    let biggerName = array[0];
    for (let i = 1; i < array.length; i += 1) {
        if (nameSize < array[i].length) {
            nameSize = array[i].length;
            biggerName = array[i];
        }
    }
    return biggerName;
}

function integerRepeats(array) {
    console.log('____________________________');
    console.log('5.>');
    console.log('');
    let count = 0;
    let countNumber = null;
    let biggerRepeat = null;
    for (let i = 0; i < array.length; i += 1) {
        count = 0;
        for (let s = 0; s < array.length; s += 1) {
            if (array[i] === array[s]) {
                count += 1;
            }
        }
        if (count > countNumber) {
            biggerRepeat = array[i];
            countNumber = count;
        }
    }
    return biggerRepeat;
}

function fromOneToNumber(num) {
    console.log('____________________________');
    console.log('6.>');
    console.log('');
    let sum = 0;
    for (let i = 0; i < num; i += 1) {
        sum += num - i;
    }
    return sum
}

function sameEnd(word, ending) {
    console.log('____________________________');
    console.log('7.>');
    console.log('');
    let end = false;
    let cut = word.slice(- ending.length);
    if (ending === cut) {
        end = true
    }
    return end;
}

console.log(palindrome('aNa'));
console.log(biggerIndexValue([2, 3, 6, 7, 10, 1]));
console.log(smallerIndexValue([2, 4, 6, 7, 10, 0, -3]));
console.log(biggerNameCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log(integerRepeats([2, 3, 2, 5, 8, 2, 3]));
console.log(fromOneToNumber(5));
console.log(sameEnd('trybe', 'be'));
