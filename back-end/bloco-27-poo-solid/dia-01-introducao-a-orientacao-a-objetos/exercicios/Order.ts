import Client from "./Client";
import Product from "./Product";

class Order {
  private _client: Client;
  private _products: Product[] = [];
  private _paymentMethod: string;
  private _discount: number = 0;

  constructor(
    client: Client,
    products: Product[],
    paymentMethod: string,
    discount: number
  ) {
    this._client = client;
    this.products = products;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get client(): Client {return this._client};

  set client(newValue: Client) {
    this._client = newValue;
  };

  get products(): Product[] {return this._products};

  set products(newValue: Product[]) {
    if (newValue.length === 0) throw new Error('O pedido deve ter pelo meno um item.');
    this._products = newValue;
  }

  get paymentMethod(): string {return this._paymentMethod};

  set paymentMethod(newValue: string) {this._paymentMethod = newValue};

  get discount(): number {return this._discount};

  set discount(newValue: number) {
    if (newValue < 0) throw new Error('O desconto não pode ser um valor negativo.');
    this._discount = newValue;
  }

  calculateTotal(): number {
    return this._products.reduce((sum, { price }) => sum = sum + price, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this._discount);
  }
}

export default Order;
