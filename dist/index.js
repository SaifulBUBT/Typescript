"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./utill/test");
function greet(name, msg) {
    console.log(`Time is : ${(0, test_1.now)()}`);
    return `${msg} ${name}!`;
}
console.log(greet("How are you?", "Saiful Islam"));
