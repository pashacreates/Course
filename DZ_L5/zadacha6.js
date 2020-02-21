alert('Задача 6:  Определить, является ли год високосным.')
let year = Number(prompt('Введите год'));
if (isNaN(year) || year <= 0) {
	alert('Некорретные данные')
} else {
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				alert('Год високосный')
			} else {
				alert('Год не високосный')
			}
		} else {
			alert('Год високосный')
		}
	} else {
		alert('Год не високосный')
	}
}

//Алгоритмы определения високосного года - http://www.adm.yar.ru/arch_serv/2000/Microsoft/content/vis.htm