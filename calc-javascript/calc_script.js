class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }


    chooseOperation(operator) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';


    }

    calculate() {
        let calculation = 0;
        const previousNumber = parseFloat(this.previousOperand);
        const currentNumber = parseFloat(this.currentOperand);
        if (isNaN(previousNumber) || isNaN(currentNumber)) return;
        switch (this.operator) {
            case '+':
                calculation = previousNumber + currentNumber;
                break;
            case '-':
                calculation = previousNumber - currentNumber;
                break;
            case 'x':
                calculation = previousNumber * currentNumber;
                break;
            case '÷':
                calculation = previousNumber / currentNumber;
                break;
            default:
                return;
        }

        this.currentOperand = calculation;
        this.operator = undefined;
        this.previousOperand = '';
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }

};

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-all-clear]');
const delButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
console.log(calculator);

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();

    });
});
clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});
equalButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
});