//С клавиатуры вводится кол-во секунд (не больше 86 399). Преобразовать это число в кол-во часов : кол-во минут : кол-во секунд.
const n = Number(prompt('Введите кол-во секунд (не больше 86 399)'));
if (isNaN(n)) {
    alert('Введите числовое значение')
} else {
    if (n > 86399 || n < 0) {
        alert('Значение не соответствует указаному диапазону')
    } else {
        if (n < 60) {
            alert(n + ' sec')
        } else {
            if (n < 60 * 60) {
                let s = n % 60;
                let m = (n - s) / 60;
                alert(m + ' m : ' + s + ' sec')
            } else {
                let s = n % 60;
                let m = (n - s) % 3600;
                let h = (n - m - s) / 3600;
                alert(h + ' h : ' + m / 60 + ' m : ' + s + ' sec')
            }
        }
    }
}