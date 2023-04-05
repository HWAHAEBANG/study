/**
 * Let's make a calculator 🧮
 */

//내 답 ===========
function calculate(action: string, num1: number, num2: number) {
  switch (action) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "remainder":
      return num1 % num2;
  }
}

//모법답안 =========== union사용 할것
type Action = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate2(action: Action, num1: number, num2: number) {
  switch (action) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "remainder":
      return num1 % num2;
    default:
      throw new Error("unknown command");
  }
}

console.log(calculate2("add", 1, 3)); // 4
console.log(calculate2("substract", 3, 1)); // 2
console.log(calculate2("multiply", 4, 2)); // 8
console.log(calculate2("divide", 4, 2)); // 2
console.log(calculate2("remainder", 5, 2)); // 1

// ts-node calculator로 실행
