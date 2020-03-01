const house = {
    address: 'Minsk, Korolya str. 45 ',
    year: 2019,
    floors: 5,
    flats: []
}

for (i = 1; i < house.floors * 2 + 1; i++) {
    const flat = {}
    flat.numberFlat = i;
    if (i % 2 === 0) {
        flat.numberFloor = i / 2;
        flat.rooms = 2;
        flat.area = 45;
        flat.residents = Math.round(Math.random() * 3 + 1);
    } else {
        flat.numberFloor = (i + 1) / 2;
        flat.rooms = 3;
        flat.area = 70;
        flat.residents = Math.round(Math.random() * 4 + 1);
    }
    //Метод рассчета коммуналки
    flat.getUtilities = function (m) {
        if (m > 3 && m < 11) {
            return 1 * flat.area * flat.residents / 2
        } else {
            return 1.8 * flat.area * flat.residents / 2
        }
    }

    house.flats.push(flat);
}
//Метод вычисление суммарной жилой площади дома
house.getArea = function () {
    let SumArea = 0;
    for (let i = 0; i < house.flats.length; i++) {
        SumArea = SumArea + house.flats[i].area;
    }
    return SumArea;
}
//Метод вычисление населения дома
house.getPopulation = function () {
    let pop = 0;
    for (let i = 0; i < house.flats.length; i++) {
        pop = pop + house.flats[i].residents;
    }
    return pop;
}
//Метод вычисление суммарного годового обслуживания всех квартир в доме
house.getSumUtilities = function () {
    let sum = 0;
    for (let i = 0; i < house.flats.length; i++) {
        for (j = 1; j < 13; j++) {
            sum = sum + house.flats[i].getUtilities(j);
        }
    }
    return sum;
}
//Метод вычисления средней плотности населения
house.getPopDensity = function () {
    let pop = 0;
    for (let i = 0; i < house.flats.length; i++) {
        pop = pop + house.flats[i].residents;
    }
    let SumArea = 0;
    for (let i = 0; i < house.flats.length; i++) {
        SumArea = SumArea + house.flats[i].area;
    }
    return SumArea / pop;
}

console.log(house);
console.log('Суммарная площадь дома равна ' + house.getArea())
console.log('Население дома составляет ' + house.getPopulation())
console.log('Сумма годового обслуживания равна ' + house.getSumUtilities())
console.log('Средняя плотность населения составляет ' + house.getPopDensity())
