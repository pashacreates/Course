const a = Number(prompt("Чему равно a ?"));
const b = Number(prompt("Чему равно b ?"));
const c = Number(prompt("Чему равно c ?"));
const d = Number(prompt("Чему равно d ?"));
alert('Максимальное из этих чисел '+((a>d) ? ((a>b) ? ((a>c) ? a:c):((b>c) ? b:c)):((d>b) ? ((d>c) ? d:((c>b) ? c:b)):b)));
alert ('A cреднее гармоническое этих чисел - ' + 4/(1/a+1/b+1/c+1/d))