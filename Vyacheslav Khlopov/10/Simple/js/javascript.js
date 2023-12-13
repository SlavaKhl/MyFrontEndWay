let num1 = prompt("Введите 1-е число");
let num2 = prompt("Введите 2-е число");
let operation = prompt("Введите любой знак: + - * /");

let startApp = () => {
    num1 = prompt("Введите 1-е число");
    num1 = Number(num1);
    num2 = prompt("Введите 2-е число");
    num2 = Number(num2);
    operation = prompt("Введите любой знак: + - * /");
    checkIsNumber();    
}

// Функция вызова Ошибки из-за DataType числа или знака
let showError = (errorPlace) => {
    console.log(`Неправильно введено: ${errorPlace}`);
}


// Функция математических операций
let math = () => {
    switch (operation) {
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
            showError("Знак функции");
            break;
    }
    // Зацикливание приложения...
    startApp ();

}
// Завершение всех определений в приложении...

let checkIsNumber = () => {
    // Проверка чисел на DataType:Number и старт работы калькулятора...
    if (isNaN(num1) || isNaN(num2)) {
        showError("Число");
    } else {
        math();
    } 
    
}
startApp ();
