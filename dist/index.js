"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./array");
const object_1 = require("./object");
const test_1 = require("./utill/test");
function greet(name, msg) {
    console.log(`Time is : ${(0, test_1.now)()}`);
    return `${msg} ${name}!`;
}
console.log(greet("How are you?", "Saiful Islam"));
let a = 10;
console.log(a);
const names = ["Saiful", "Alex", "John"];
names.push("Doe");
console.log(names);
const rolls = [1, 2, 3, 4, 5];
const person = {
    name: "Saiful Islam",
    age: 30,
};
console.log(person);
const config = {
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
console.log(object_1.user);
///
console.log(array_1.cars);
const dhakaCoordinates = [23.8103, 90.4125];
console.log("Dhaka Coordinates:", dhakaCoordinates);
const players = [
    ["Saiful", 30, "Bangladesh"],
    ["Alex", 25, "USA"],
    ["John", 28, "UK"],
];
console.log(players);
const person1 = ["Saiful", 30];
// Tuple distructuring
const [name, age] = person1;
console.log(`Name: ${name}, Age: ${age}`);
const optionalPerson = ["Saiful"];
console.log(`Optional Person: Name: ${optionalPerson[0]}, Age: ${optionalPerson[1] ?? "N/A"}`);
const restPerson = ["Saiful", 30, 31, 32];
console.log(`Rest Person: Name: ${restPerson[0]}, Ages: ${restPerson.slice(1).join(", ")}`);
// Function returning a tuple
function getPersonInfo() {
    return ["Saiful", 30];
}
const [personName, personAge] = getPersonInfo(); //distructuring
console.log(`Person Info: Name: ${personName}, Age: ${personAge}`);
//  Enum example
var TColors;
(function (TColors) {
    TColors["Red"] = "red";
    TColors["Green"] = "green";
    TColors["Blue"] = "blue";
})(TColors || (TColors = {}));
const t1 = {
    size: 38,
    color: TColors.Red,
};
const t2 = {
    size: 40,
    color: TColors.Blue,
};
const t3 = {
    size: 42,
    color: TColors.Green,
};
const t4 = {
    size: 36,
    color: TColors.Red,
};
console.log(t1, t2, t3, t4);
// Enum another example
var Status;
(function (Status) {
    Status["draft"] = "draft";
    Status["private"] = "private";
    Status["public"] = "public";
})(Status || (Status = {}));
const article1 = {
    id: 1,
    title: "My First Article",
    status: Status.draft,
};
const article2 = {
    id: 2,
    title: "My Second Article",
    status: Status.private,
};
const article3 = {
    id: 3,
    title: "My Third Article",
    status: Status.public,
};
console.log(article1, article2, article3);
