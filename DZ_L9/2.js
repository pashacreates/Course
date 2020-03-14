const s = prompt('Введите текст');
const exp = /\+1[(\s-]?\d\d\d[)\s-]?\d\d\d[\s-]?\d\d\d\d/g;
console.log(s.match(exp));