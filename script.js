let displayValue = "";  
let firstOperand = null;  
let operator = null;  
let waitingForSecondOperand = false;  

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number.toString();  
        waitingForSecondOperand = false;
    } else {
        displayValue += number.toString();  
    }

    document.getElementById('display').value = displayValue;  
}

function setOperation(selectedOperator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);  
    } else if (operator) {
        calculate();  
    }

    operator = selectedOperator;  
    waitingForSecondOperand = true;  

    document.getElementById('display').value = `${firstOperand} ${operator}`;  
}

function calculate() {
    let secondOperand = parseFloat(displayValue);  

    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        return;  
    }

    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    document.getElementById('display').value = displayValue;

    firstOperand = result;  
    operator = null;
    waitingForSecondOperand = true;  
}

function clearDisplay() {
    displayValue = "";
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    document.getElementById('display').value = displayValue;
}
