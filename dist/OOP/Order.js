"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Order = void 0;
class Order {
    id;
    total;
    constructor(id, total) {
        if (total < 0) {
            throw new Error("Total must be positive");
        }
        this.id = id;
        this.total = total;
    }
}
exports.Order = Order;
const order = new Order("1234", 5000);
class User {
    name;
    email;
    age;
    // name: string;
    // email: string;
    // age: number;
    // constructor(name: string, email: string, age: number) {
    //     this.name = name;
    //     this.email = email;
    //     this.age = age;
    // }
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    greet(msg) {
        return `Hello, ${this.name}, ${msg}`;
    }
}
exports.User = User;
