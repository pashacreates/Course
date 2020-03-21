//Создать массив имен, названий товаров и городов. Создать скрипт, который каждые 5 секунд 
//в нижнем правом углу страницы будет отображать карточку с текстом "Иван из г. Лондон купил 3 шт. товара Apple Iphone". 
//Имена, города, товары выбираются случайным образом из массивов, количество - случайное число от 1 до 5.
// Появившаяся карточка должна удаляться через 4 секунды после появления
const names = ['Alex', 'Billy', 'Tommy', 'Jimmy', 'Johnny'];
const towns = ['Rome', 'Mexico', 'Boston', 'Magadan', 'Tokyo'];
const prods = ['Apple iPhone X', 'Xiaomi Mi10', 'Samsung Galaxy S10', 'Huawei P30', 'Nokia 3310'];

const random = function(a) {
    const i = Math.round(Math.random() * (a.length - 1));
    return a[i];
};

const div = document.createElement('div');
setInterval(() => {
    const count = Math.round(Math.random() * 4) + 1;
    div.innerHTML = `${random(names)} из города ${random(towns)} купил ${count} шт. товара ${random(prods)}`;
    document.body.appendChild(div);
    setTimeout(() => {
        document.body.removeChild(div);
    }, 4000)
}, 5000);