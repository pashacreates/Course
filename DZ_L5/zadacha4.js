alert('Задача 4: Ввести число байт (1 <= n <= 2 ** 41). Вывести это число как количество байт,килобайт, мегабайт, гигабайт')
let n = Number(prompt('Введите число от 1 до 2^41'));

if (1 <= n && n <= 2 ** 41) {
	if (n < 2 ** 10) {
		alert('Число равно ' + n + ' байт')
	} else {
		if (n < 2 ** 20) {
			alert(n + ' байт = ' + n / 1024 + ' Килобайт')
		} else {
			if (n < 2 ** 30) {
				alert(n + ' байт = ' + n / 2 ** 20 + ' Мегабайт')
			} else {
				alert(n + ' байт = ' + n / 2 ** 30 + ' Гигабайт')
			}
		}
	}
} else {
	isNaN(n) ? 'Не-не, число вводи-ка...' : 'Введенное число не соответствует указаному диапазону'
}
