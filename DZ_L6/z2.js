const n = Number(prompt('Введите N'));
let j = 0;
if (isNaN(n)) {
  alert("Введенное значение не является числом")
} else {
  if (n < 2) {
    console.log('Число ' + n + ' не является ни составным, ни простым')
  } else {
    for (i = 2; i < n; i++) {
      if (n % i == 0) {
        j++
      }
    }
    if (j > 0) {
      console.log('Число ' + n + ' составное')
    } else {
      console.log('Число ' + n + ' простое')
    }
  }
}