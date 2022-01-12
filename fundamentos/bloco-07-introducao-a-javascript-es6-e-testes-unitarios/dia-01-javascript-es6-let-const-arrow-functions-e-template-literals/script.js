let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
const testingScope = (escopo) => escopo ? console.log(ifScope) : console.log(elseScope);  
// console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

oddsAndEvens.sort((a, b) => (a - b));
console.log(`Os números ${oddsAndEvens.join(', ')}se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
