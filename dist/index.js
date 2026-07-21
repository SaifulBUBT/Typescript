"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
};
console.log(config);
