/* Написать скрипт, который выведет домен 1-го уровня той страницы, на которой запущен.*/
const d = document.domain;
const exp = /\w+$/;
alert(d.match(exp));