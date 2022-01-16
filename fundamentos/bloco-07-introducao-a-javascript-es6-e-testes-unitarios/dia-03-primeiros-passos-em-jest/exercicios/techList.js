function techList(array, string) {
  // seu código aqui
  let arraySort = array.sort();
  let arrayPrint = [];
  let personalTech = {};

  for (let i = 0; i < arraySort.length; i += 1) {
    personalTech.tech = arraySort[i];
    personalTech.name = string;
    arrayPrint.push(personalTech);
    personalTech = {};
  }
  return arrayPrint.length === 0 ? 'Vazio!' : arrayPrint;
}

module.exports = techList;
