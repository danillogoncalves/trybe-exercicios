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

console.log(palindrome('aNa'));
console.log(biggerIndexValue([2, 3, 6, 7, 10, 1]));
console.log(smallerIndexValue([2, 4, 6, 7, 10, 0, -3]));
