export class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Amount mnust be positive");
    }
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insuffient fund");
    }

    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// const acc = new BankAccount();
