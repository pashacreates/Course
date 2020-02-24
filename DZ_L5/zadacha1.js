alert ('Задача 1: Ввести 4 числа с клавиатуры, вывести максимальное среди них, а также среднее гармоническое этих четырёх чисел')
const a = Number(prompt("Чему равно a ?"));
const b = Number(prompt("Чему равно b ?"));
const c = Number(prompt("Чему равно c ?"));
const d = Number(prompt("Чему равно d ?"));

// alert('Максимальное из этих чисел '+((a>d) ? a>b ? ((a>c) ? a:c):((b>c) ? (b:c): (d>b) ? (d>c) ? d : c>b ? c:b : b));

let max1;
let max2;
let max;
if (a > b) {
  max1 = a;
} else {
  max1 = b
}
if (c > d) {
  max2 = c;
} else {
  max2 = d
}
if (max1 > max2) {
  max = max1
} else {
  max = max2
}

alert('Максимальное из этих чисел ' + max);
alert('A cреднее гармоническое этих чисел - ' + 4 / (1 / a + 1 / b + 1 / c + 1 / d))