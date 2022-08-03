class Product {
  private _name: string;
  private _price: number;
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {return this._name};

  set name(newValue: string) {
    if (newValue.length < 3) throw new Error('O nome não pode ter menos que 3 caracteres');
    this._name = newValue;
  };

  get price(): number {return this._price};

  set price(newValue: number) {
    if (newValue < 0) throw new Error('O preço não pode ser negativo!')
    this._price = newValue;
  }
}

export default Product;