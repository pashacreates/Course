//Написать калькулятор: число + знак + число = результат
const a = Number(prompt('Введите число А'));
const z = prompt('Введите знак');
const b = Number(prompt('Введите число Б'));
let r; //результат
switch (z) {
    case '+':
        alert(a + b);
        break;
    case '-':
        alert(a - b);
        break;
    case '*':
        alert(a * b);
        break;
    case '/':
        alert(a / b);
        break;
    case '^':
        alert(a ** b);
        break;
    default:
        alert('Используйте один из знаков: + - * / ^')
}