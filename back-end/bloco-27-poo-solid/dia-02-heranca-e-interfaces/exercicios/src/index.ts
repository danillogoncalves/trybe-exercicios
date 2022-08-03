import Person from "./Class/Person";

const danillo = new Person('Danillu', new Date('1986/10/26'));
const paty = new Person('Pati', new Date('1986/06/13'));

console.log(danillo);
console.log(danillo.name);
console.log(danillo.birthDate);
danillo.name = 'Danillo'
danillo.birthDate = new Date('1986/08/26');
console.log(danillo);
console.log(danillo.name);
console.log(danillo.birthDate);

console.log(paty);
console.log(paty.name);
console.log(paty.birthDate);
paty.name = 'Paty';
paty.birthDate = new Date('1981/06/13');
console.log(danillo);
console.log(danillo.name);
console.log(danillo.birthDate);
