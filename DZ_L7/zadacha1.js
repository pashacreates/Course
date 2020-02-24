//Пользователь вводит строку. Найти и вывести самое длинное слово в этой строке. Вывести количество гласных (латинских) в этой строке (прописных и строчных)
const s = prompt('Введите строку');
const arr = s.split(' ');
console.log(s);
console.log(arr);
let max = arr[0].length;
let lw = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > max) {
    max = arr[i].length;
    lw = arr[i];
  }
}
console.log(lw);

let glas = 'AaEeYyIiOoUu'
let sumGlas = 0;
for (j = 0; j < s.length; j++) {
  for (k = 0; k < 12; k++) {
    if (s[j] === glas.split('')[k]) {
      sumGlas++
    }
  }
}
console.log(sumGlas)