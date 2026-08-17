export class Order {
  id: string;
  total: number;

  constructor(id: string, total: number) {
    if (total < 0) {
      throw new Error("Total must be positive");
    }
    this.id = id;
    this.total = total;
  }
}

const order = new Order("1234", 5000);

export class User {
  // name: string;
  // email: string;
  // age: number;

  // constructor(name: string, email: string, age: number) {
  //     this.name = name;
  //     this.email = email;
  //     this.age = age;
  // }

  constructor(
    public name: string,
    public email: string,
    public age: number,
  ) {}

  greet(msg: string): string {
    return `Hello, ${this.name}, ${msg}`;
  }
}
