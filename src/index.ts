import { now } from "./utill/test";

function greet(name: string, msg: string): string {
  console.log(`Time is : ${now()}`);
  return `${msg} ${name}!`;
}

console.log(greet("How are you?", "Saiful Islam"));
