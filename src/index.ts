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

// tuple

type Point = readonly [number, number];

const dhakaCoordinates: Point = [23.8103, 90.4125];
console.log("Dhaka Coordinates:", dhakaCoordinates);

type Player = [string, number, string];

const players: Player[] = [
  ["Saiful", 30, "Bangladesh"],
  ["Alex", 25, "USA"],
  ["John", 28, "UK"],
];

console.log(players);

///
type PersonTuple = [string, number];
const person1: PersonTuple = ["Saiful", 30];

// Tuple distructuring
const [name, age] = person1;
console.log(`Name: ${name}, Age: ${age}`);

// Tuple with optional elements
type OptionalTuple = [string, number?];
const optionalPerson: OptionalTuple = ["Saiful"];
console.log(
  `Optional Person: Name: ${optionalPerson[0]}, Age: ${optionalPerson[1] ?? "N/A"}`,
);

// Tuple with rest elements
type RestTuple = [string, ...number[]];
const restPerson: RestTuple = ["Saiful", 30, 31, 32];
console.log(
  `Rest Person: Name: ${restPerson[0]}, Ages: ${restPerson.slice(1).join(", ")}`,
);

// Function returning a tuple
function getPersonInfo(): [string, number] {
  return ["Saiful", 30];
}

const [personName, personAge] = getPersonInfo(); //distructuring
console.log(`Person Info: Name: ${personName}, Age: ${personAge}`);

//  Enum example

enum TColors {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

type TeeShirt = {
  size: number;
  // color: string;
  color: TColors;
};

const t1: TeeShirt = {
  size: 38,
  color: TColors.Red,
};

const t2: TeeShirt = {
  size: 40,
  color: TColors.Blue,
};

const t3: TeeShirt = {
  size: 42,
  color: TColors.Green,
};

const t4: TeeShirt = {
  size: 36,
  color: TColors.Red,
};

console.log(t1, t2, t3, t4);

// Enum another example
enum Status {
  draft = "draft",
  private = "private",
  public = "public",
}

type Article = {
  id: number;
  title: string;
  status: Status;
};

const article1: Article = {
  id: 1,
  title: "My First Article",
  status: Status.draft,
};

const article2: Article = {
  id: 2,
  title: "My Second Article",
  status: Status.private,
};

const article3: Article = {
  id: 3,
  title: "My Third Article",
  status: Status.public,
};

console.log(article1, article2, article3);

////union type example
type UserId = string | number;

const userId1: UserId = "abc123";
const userId2: UserId = 456;

//
type Role = "admin" | "editor" | "viewer";
const userRole1: Role = "admin";
const userRole2: Role = "editor";
const userRole3: Role = "viewer";

//
type SuccessResponse = {
  status: "success";
  data: string[];
};

type ErrorResponse = {
  status: "error";
  message: string;
  code: number;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleApiResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.message, "Code:", response.code);
  }
}

handleApiResponse({ status: "success", data: ["item1", "item2"] });
handleApiResponse({ status: "error", message: "Not Found", code: 404 });

//
type Rentangle = {
  width: number;
  height: number;
};

type Square = {
  size: number;
};

type Circle = {
  radius: number;
};

type Shape = Rentangle | Square | Circle;

function calculteArea(shape: Shape): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else if ("size" in shape) {
    return shape.size * shape.size;
  } else {
    return shape.width * shape.height;
  }
}

const recArea = calculteArea({ width: 10, height: 20 });
const squareArea = calculteArea({ size: 15 });
const circleArea = calculteArea({ radius: 7 });

console.log("Rectangle Area:", recArea);
console.log("Square Area:", squareArea);
console.log("Circle Area:", circleArea);

// Intersection type example //
type Person1 = {
  name: string;
  age: number;
};

type Employee = Person1 & {
  employeeId: number;
  department: string;
};

// type PersonEmployee = Person1 & Employee;

const employee: Employee = {
  name: "Saiful",
  age: 30,
  employeeId: 12345,
  department: "IT",
};
console.log(employee);
