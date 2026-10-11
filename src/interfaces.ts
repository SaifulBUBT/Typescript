// type aliases
type UserId = string | number;

type User = {
  id: UserId;
  name: string;
  email: string;
  age: number;
};

// interfaces
interface AUser {
  id: UserId;
  name: string;
  email: string;
  age: number;
}

const user1: AUser = {
  id: 1,
  name: "Saiful",
  email: "saiful@gmail.com",
  age: 30,
};

// Interface and Type Alias - The Similarity

interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductType = {
  id: number;
  name: string;
  price: number;
};

// The First Big Difference Between Type Aliases and Interfaces

// Type Aliases can use union types
type Id = string | number;
type Status = "active" | "inactive" | "pending";
type Formatter = (value: string) => string;
type Pair = [string, number];

// Extending an Interface with extends
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: "Saiful",
  age: 30,
  employeeId: 12345,
  department: "IT",
};

// Extending Multiple Interfaces
interface HasName {
  name: string;
}

interface HasEmail {
  email: string;
}

interface Contact extends HasName, HasEmail {
  phone: string;
}

const contact: Contact = {
  name: "Saiful",
  email: "saiful@gmail.com",
  phone: "123-456-7890",
};

// Can interfaces extend type aliases? Yes, but with some limitations. You can extend a type alias with an interface, but you cannot extend a type alias with another type alias.
type Animal = {
  name: string;
};

interface Dog extends Animal {
  legs: number;
}

const dog: Dog = {
  name: "Buddy",
  legs: 4,
};

// Can type aliases use Interfaces? Yes, type aliases can use interfaces. You can create a type alias that references an interface, and you can also create a type alias that extends an interface.
interface Vehicle {
  make: string;
  model: string;
}
type Car = Vehicle & {
  doors: number;
};

const car: Car = {
  make: "Toyota",
  model: "Camry",
  doors: 4,
};

// Classes and Interfaces
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

const logger = new ConsoleLogger();
logger.log("This is a log message.");

// A pratical example

type ProductId = string | number;
type ProductStatus = "draft" | "published" | "archived";

interface Product {
  id: ProductId;
  name: string;
  price: number;
  status: ProductStatus;
}

interface DigitalProduct extends Product {
  downloadUrl: string;
}

type PhysicalProduct = Product & {
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
};

const ebook: DigitalProduct = {
  id: "ebook-001",
  name: "Learn TypeScript",
  price: 29.99,
  status: "published",
  downloadUrl: "https://example.com/downloads/learn-typescript",
};

const book: PhysicalProduct = {
  id: "book-001",
  name: "Learn TypeScript",
  price: 29.99,
  status: "published",
  weight: 1.5,
  dimensions: {
    width: 20,
    height: 25,
    depth: 5,
  },
};
