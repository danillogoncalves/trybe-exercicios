export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {return this._name};

  set name(newValue: string) {
    this.validateName(newValue);
    this._name = newValue;
  }

  validateName(value: string) {
    if (value.length > 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres');
  }
}