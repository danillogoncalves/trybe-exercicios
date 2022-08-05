import Character from "./Character";

export default class LongRangeCharacter extends Character {
  constructor(name: string, specialMoveName: string, private _rangeAttack: string) {
    super(name, specialMoveName)
  }
  talk(): void {
    console.log(`Olá, meu nome é ${this.name}, meus ataques são a distância.`);
  }
  specialMove(): void {
    console.log(this.specialMoveName);
  }

  rangeAttack(): void {
    console.log(this._rangeAttack);
  }
}