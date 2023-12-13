// Создать консольный калькулятор
// создать 3 переменный для 1 и 2 числел и математического знака 
// использовать метод promt что бы попросить пользователя ввести перовое число
// результат сохранить в меременную 
// повторить результат для 2 числа и математического знака 
// выполнить вывести результат вычеслений 
// можно использовать if else или конструкцию switch

let num1 = prompt("enter number 1");
num1 = Number(num1);
console.log(typeof(num1));
let num2 = prompt("enter number 2");
num2 = Number(num2);
console.log(typeof(num2));
let operator = prompt("+ - * /");

switch (operator) {
    case "+":
        console.log(num1 + num2);              
        break;
    case "-":
        console.log(num1 - num2);              
        break;
    case "*":
        console.log(num1 * num2);              
        break;
    case "/":
        console.log(num1 / num2);              
        break;
    default:
        break;
}


// if (num1 === Number, num2 === Number) {
//     console.log(num1 + num2);              
//     console.log(num1 - num2);              
//     console.log(num1 * num2);              
//     console.log(num1 / num2);    
// } else {}