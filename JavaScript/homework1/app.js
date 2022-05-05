const value1 = Number(prompt('Enter first value'))
const value2 = Number(prompt('Enter first value'))
const value3 = prompt('Enter Math operation*,/,+,-,%')

if (!value1 || !value2) {
    console.log('Invalid number');
} else {
    if (value3 == '-') {
        console.log(value1 - value2)
    }
    else if (value3 == '+') {
        console.log(value1 + value2)
    }
    else if (value3 == '*') {
        console.log(value1 * value2)
    }
    else if (value3 == '%') {
        console.log(value1 % value2)
    }
    else if (value3 == '%') {
        console.log(value1 % value2)
    }
}
switch (value3) {
    case '-':
        console.log(value1 - value2);
        break;
    case '+':
        console.log(value1 + value2);
        break;
    case '*':
        console.log(value1 * value2);
        break;
    case '/':
        console.log(value1 / value2);
        break;
    case '%':
        console.log(value1 % value2);
        break;
    default:
        console.log('Invalid number or operation')
        break;
}