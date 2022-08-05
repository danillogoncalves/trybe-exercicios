import Character from "./classes/Character";
import LongRangeCharacter from "./classes/LongRangeCharacter";
import MeleeCharacter from "./classes/MeleeCharacter";

function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();  
}

const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon',);
const samus = new LongRangeCharacter('Samus', 'Zero Laser', 'Shot LongBow');

console.log(samus);


[yoshi, samus].forEach((character) => characterPresentation(character));