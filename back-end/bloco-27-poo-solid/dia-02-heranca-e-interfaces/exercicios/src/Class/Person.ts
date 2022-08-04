export default class Person {
  private _name: string = '';
  private _birthDate: Date = new Date();
  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get name(): string {return this._name};

  set name(newValue: string) {
    this.validateName(newValue);
    this._name = newValue;
  }

  get birthDate(): Date {return this._birthDate};

  set birthDate(newValue: Date) {
    this.validateBirthDate(newValue);
    this._birthDate = newValue;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const YEAR_MS = 31_536_000_000;
    return Math.floor(diff / YEAR_MS);
  }

  private validateName(value: string) {
    if (value.length < 3) throw Error('O nome deve ter no mínimo três caracteres')
  };

  private validateBirthDate(value: Date) {
    if (Person.getAge(value) > 120) throw Error('A pessoa deve ter no máximo 120 anos.');
    if (value.getTime() > new Date().getTime()) throw Error('A pessoa deve ter no máximo 120 anos.');
  }
}