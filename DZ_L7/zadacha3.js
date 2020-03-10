/* 3.Создать массив из объектов-людей. Каждому задать случайную дату рождения
от 1 января 1980 до 31 декабря 1995 (в виде объекта Date), имя, а также зарплату (от 0 до 500).
Имена выбираются случайно из другого массива имён. Количество людей вводится с клавиатуры. 
Вывести всех людей в консоль, вывести средний возраст людей и имя человека с самой большой зарплатой в списке. */
const n = +prompt('Введите кол-во людей');
const ArrNames = ['Obby', 'Sara', 'Ваня', 'Sam', 'Jonny', 'Max', 'Fёdor', 'Емеля', 'Ян', 'Lich'];
const d1 = +new Date('1980-01-01');
const d2 = +new Date('1995-12-31');
let arrPeoples = [];

for (i = 0; i < n; i++) {
  let people = {
    name: ArrNames[Math.round(Math.random() * 9)],
    BD: new Date(Math.round(Math.random() * (d2 - d1)) + d1),
    pay: Math.round(Math.random() * 500)
  };
  arrPeoples[i] = people;
}
console.log(arrPeoples);