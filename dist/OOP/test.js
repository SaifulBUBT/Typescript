"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    items;
    constructor() {
        this.items = [];
    }
    addItems(id, price, qty) {
        this.items.push({ id, price, qty });
    }
    removeItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }
}
exports.Cart = Cart;
// const cart = new Cart();
// cart.addItems(10, 200, 4);
// console.log(cart.getTotal());
