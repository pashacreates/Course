alert ('Задача 5: Вычислить площадь треугольника')
let M = Number(prompt('Чему равна сторона треугольника AB?'));
let N = Number(prompt('Чему равна сторона треугольника BC?'));
let L = Number(prompt('Чему равна сторона треугольника CA?'));
let p = 1/2*(M+N+L);
alert(((M+N)>L && (N+L)>M && (L+M)>N) ? 
	('Площадь Вашего треугольника равна '+(p*(p-M)*(p-N)*(p-L))**(1/2))
  :
  ('Это не треугольник, это фигня какая-то:('))