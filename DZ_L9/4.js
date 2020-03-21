/* 4.Вывести в консоль количество квадратов 60*60 пикселей, которые полностью поместятся в области просмотра страницы в виде сетки.*/
const w = document.documentElement.clientWidth;
const h = document.documentElement.clientHeight;
console.log(Math.floor(w / 60) * Math.floor(h / 60));