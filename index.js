let prompt = require('prompt-sync')();

// let tahun = prompt('Tahun lahir? ');

// console.log (tahun) 

// let tahun1 = prompt("Enter the first year:");

// let op = prompt("Enter an operator (+, -, *, /, %, **):");

// let tahun2 = prompt("Enter the second year:");

// console.log(`Result: ${tahun1} ${op} ${tahun2}`);

function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        default:
            return 'Invalid operator';
    }
}
// Main program

    console.log('Simple Calculator');
    
   
    let num1 = prompt('Angka pertama:');
    let operator = prompt('Operator (+, -, *, /, %, **):');
    let num2 = prompt('Angka kedua:');
    
    
    let hasil = calculate(num1, operator, num2);
    
    
    console.log(`Hasilnya: ${num1} ${operator} ${num2} = ${hasil}`);


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

console.log(add(5, 3));        
console.log(subtract(10, 4));  
console.log(multiply(2, 6));   
console.log(divide(8, 2));     
console.log(divide(8, 0));     
console.log(modulo(10, 3));    
console.log(power(2, 3));      

while (true) {
    const num1 = prompt();
    const num2 = prompt();
    
    const operator = prompt();
    
    if (operator === 'exit') {
        break; 
    }
    
    let result;
    
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operator");
            continue; 
    }
    
        console.log(`Result: ${result}`);
}


        console.log("Error:", result);
        
    { if (result === undefined || result === null) {
        const defaultMessage = result ?? "Result is undefined or null, something went wrong!";
        console.log(defaultMessage);
        
    } else {
        console.log(`Unexpected type: ${type}`);
    }}

