import { question } from "readline-sync";

const num = parseInt(question("Enter Number: "));

function isOddOrEven(num) {
  if (num % 2 != 0) {
    return "Odd";
  } else {
    return "Even";
  }
}

console.log(`The Number ${num} is ${isOddOrEven(num)}`);
