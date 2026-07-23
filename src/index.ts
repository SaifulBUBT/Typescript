import { cars } from "./array";
import { user } from "./object";
import { now } from "./utill/test";

function greet(name: string, msg: string): string {
  console.log(`Time is : ${now()}`);
  return `${msg} ${name}!`;
}

console.log(greet("How are you?", "Saiful Islam"));

let a: number = 10;
console.log(a);

const names: string[] = ["Saiful", "Alex", "John"];

names.push("Doe");
console.log(names);

const rolls: number[] = [1, 2, 3, 4, 5];

// Objects
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Saiful Islam",
  age: 30,
};
console.log(person);

// using type

type DatabaseConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
};

type Features = {
  registration: boolean;
  darkMode: boolean;
};

type AppConfig = {
  appName: string;
  version: string;
  debug: boolean;
  port: number;
  database: DatabaseConfig;
  features: Features;
  languages: string[];
};

const config: AppConfig = {
  appName: "MyApp",
  version: "1.0.0",
  debug: true,
  port: 3000,
  database: {
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "password",
  },
  features: {
    registration: true,
    darkMode: false,
  },
  languages: ["en", "es", "fr"],
};
console.log(config);

//////

console.log(user);

///
console.log(cars);
