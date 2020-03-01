//1. Вычисление суммы всех аргументов
 function getSum() {
   let Sum = 0;
   for (i = 0; i < arguments.length; i++) {
     Sum = Sum + arguments[i];
   }
   return Sum;
 }

//2. Получение случайного числа в заданном диапазоне
 function getNumber(min,max) {
   return Math.round(Math.random() * (max-min) + min);
 }

//3. Расстояние между двумя объектами-точками
 function getDist(p1, p2) {
   return (((p1.x - p2.x) ** 2 + (p1.y - p2.x) ** 2) ** (1 / 2))
 }

//4. Генерацию случайного цвета в формате RGB()
   function getRandomRGB(r,g,b){
   r = Math.round(Math.random()*255);
   g = Math.round(Math.random()*255);
   b = Math.round(Math.random()*255);
     return 'RGB('+r+', '+g+', '+b+')'
   } 

   //5. Проверка простоты введенного числа
 function isPrimeNumber(n) {
    if (n == 1 || n == 2) {
      return true;
    } else {
        let j = 0;
      for (i = 2; i < n; i++) {
        if(n % i === 0){
        j++
        }
      }
      return (j === 0);
    } 
  }