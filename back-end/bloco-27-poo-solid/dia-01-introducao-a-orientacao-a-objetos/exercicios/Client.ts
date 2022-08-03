class Client {
  private _name: string;
  
  constructor(name: string) {
    this._name = name;
  }

  get name(): string {return this._name};

  set name(newValue: string) {
    if (newValue.length < 3) throw new Error('O nome não pode ter menos que 3 caracteres');
    this._name = newValue;
  }
}

export default Client;