function encode(string) {
  // seu código aqui
  let lowercaseString = string.split('');
  const caracter = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let i = 0; i < lowercaseString.length; i += 1) {
    if (caracter[lowercaseString[i]]) {
      lowercaseString[i] = caracter[lowercaseString[i]];
    }
  }
  lowercaseString = lowercaseString.join('');
  return lowercaseString;
}

function decode(string) {
  // seu código aqui
  let lowercaseString = string.split('');
  const caracter = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < lowercaseString.length; i += 1) {
    if (caracter[lowercaseString[i]]) {
      lowercaseString[i] = caracter[lowercaseString[i]];
    }
  }
  lowercaseString = lowercaseString.join('');
  return lowercaseString;
}

console.log(typeof encode);

module.exports = {
  encode,
  decode,
}