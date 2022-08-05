import Character from "./Character";

export default class MeleeCharacter extends Character {
  talk(): void {
    console.log(`Olá, meu nome é ${this.name}, meus ataques são corpo-a-corpo.`);
  }
  specialMove(): void {
    console.log(this.specialMoveName);
  }
}