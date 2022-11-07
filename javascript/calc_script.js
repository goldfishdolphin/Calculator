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