"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 1,
    name: "Saiful",
    email: "saiful@gmail.com",
    age: 30,
};
const employee = {
    name: "Saiful",
    age: 30,
    employeeId: 12345,
    department: "IT",
};
const contact = {
    name: "Saiful",
    email: "saiful@gmail.com",
    phone: "123-456-7890",
};
const dog = {
    name: "Buddy",
    legs: 4,
};
const car = {
    make: "Toyota",
    model: "Camry",
    doors: 4,
};
class ConsoleLogger {
    log(message) {
        console.log(message);
    }
}
const logger = new ConsoleLogger();
logger.log("This is a log message.");
