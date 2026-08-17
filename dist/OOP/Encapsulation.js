"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    balance = 0;
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount mnust be positive");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insuffient fund");
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
// const acc = new BankAccount();
