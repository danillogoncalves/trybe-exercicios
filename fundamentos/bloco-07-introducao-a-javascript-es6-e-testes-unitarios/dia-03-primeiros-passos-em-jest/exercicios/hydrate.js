function hydrate(string) {
  let onlyNumber = string.match(/\d+/g);
  if (!onlyNumber) {
    throw new Error('Tu não bebeu ainda, vai beber leite bebê?');
  }
  let multiply = 0;
  for (let i = 0; i < onlyNumber.length; i += 1) {
    multiply += parseInt(onlyNumber[i], 10);
  }
  if (multiply > 1) {
    return `${multiply} copos de água`;
  }
  return `${multiply} copo de água`;
}

console.log(hydrate('hsahgjhgsjhagjhadsg1111'))

module.exports = hydrate;
