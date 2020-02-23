//Вывести k-ое число Фибоначчи (вводится с клавиатуры)
const k = Number(prompt('Введите k-ое число Фибоначчи'));
let fk = 0;
let f1 = 0
let f2 = 1;
switch (k) {
  case 1:
    fk = 0;
    break;
  case 2:
    fk = 1;
    break;
  default:
    for (let i = 2; i < k; i++) {
      fk = f1 + f2;
      f1 = f2;
      f2 = fk
    }
}
console.log(fk)