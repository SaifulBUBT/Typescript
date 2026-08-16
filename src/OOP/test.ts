type CartItem = {
  id: number;
  price: number;
  qty: number;
};

export class Cart {
  items: CartItem[];

  constructor() {
    this.items = [];
  }

  addItems(id: number, price: number, qty: number) {
    this.items.push({ id, price, qty });
  }

  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}

// const cart = new Cart();
// cart.addItems(10, 200, 4);
// console.log(cart.getTotal());
