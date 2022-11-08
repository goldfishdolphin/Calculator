class Calculator {
    constructor(previousOperandTextElement, currantOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currantOperandTextElement = currantOperandTextElement;
        this.clear();
    }
    clear() {
        this.currantOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }
    delete() {

    }
    appendNumber(number) {
        if (number === '.' && this.currantOperand.includes('.'))

            return this.currantOperand = this.currantOperand.toString() + number.toString();

    }


    chooseOperation(operator) {
        if (this.currantOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
            this.operator = operator;
            this.previousOperand = this.currantOperand;
            this.currantOperand = '';
        }

    }

    calculate() {
        let calculation;
        const previousNumber = parseFloat(this.previousOperand);
        const currantNumber = parseFloat(this.currantOperand);
        if (isNaN(previousNumber) || isNaN(currantNumber)) {
            switch (this.operator) {
                case '+':
                    calculation = previousNumber + currantNumber;
                    break;
                case '-':
                    calculation = previousNumber - currantNumber;
                    break;
                case 'x':
                    calculation = previousNumber * currantNumber;
                    break;
                case '÷':
                    calculation = previousNumber / currantNumber;
                    break;
                default:
                    return;
            }
        }
        this.currantOperand = calculation;
        this.operator = undefined;
        this.previousOperand = '';
    }
    updateDisplay() {

    }

};

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-all-clear]');
const delButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currantOperandTextElement = document.querySelector('[data-currant-operand]');

const calculator = new Calculator(previousOperandTextElement, currantOperandTextElement);
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