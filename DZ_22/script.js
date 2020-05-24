let data = [];
let map = null;
let button = document.getElementById('getTime');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onload = function() {
    data = JSON.parse(this.responseText);
};
xhr.send(null);

function getDistance(pointA, pointB) {
    const toRad = Math.PI / 180;
    const lat1 = pointA.latitude * toRad;
    const long1 = pointA.longitude * toRad;
    const lat2 = pointB.latitude * toRad;
    const long2 = pointB.longitude * toRad;
    const R = 6371; // Радиус Земли в км

    return 2 * R * Math.asin(((Math.sin((lat2 - lat1) / 2) ** 2) +
        (Math.cos(lat1) * Math.cos(lat1) * (Math.sin((long2 - long1) / 2) ** 2))) ** (1 / 2));
};


ymaps.ready(init);

function init() {
    map = new ymaps.Map('map', {
        center: [55.152738, 27.383146],
        zoom: 12
    });
    map.controls.remove('rulerControl');
    map.controls.remove('trafficControl');
    map.controls.remove('searchControl');
    map.controls.remove('fullscreenControl');

    data.forEach(item => {
        const point = new ymaps.Placemark([item.latitude, item.longitude], {

            balloonContentHeader: item.title,
            balloonContentBody: `Время простоя - ${item.time} мин.`,
            balloonContentFooter: item.latitude + ', ' + item.longitude,
            hintContent: item.title,
        });

        map.geoObjects.add(point);
    });
    const line = new ymaps.Polyline(data.map(item => [item.latitude, item.longitude]));
    map.geoObjects.add(line);

    let raceDist = 0;

    for (let i = 0; i < data.length - 1; i++) {
        raceDist += getDistance(data[i], data[i + 1]);
    }

    button.addEventListener('click', () => {
        getTime(raceDist);
    });
};

function getTime(dist) {
    const speed = document.getElementById('speed').value;
    if (!speed) { alert('Введите скорость') } else {
        if (isNaN(speed)) {
            alert('Введите скорость в числовом формате')
        } else {
            const downtime = data.reduce((accum, item) => accum + item.time, 0);
            const allTime = dist / speed * 60 + downtime; // в минутах

            let hours = '';
            let minutes = 'минут'
            if (allTime / 60 >= 1 && allTime / 60 < 2) {
                hours = Math.floor(allTime / 60) + ' час'
            };
            if (allTime / 60 >= 2 && allTime / 60 < 5) {
                hours = Math.floor(allTime / 60) + ' часа'
            };
            if (allTime / 60 > 5) {
                hours = Math.floor(allTime / 60) + ' часов'
            };
            switch (Math.round(allTime % 60) % 10) {
                case 1:
                    minutes = 'минута';
                    break;
                case 2:
                case 3:
                case 4:
                    minutes = 'минуты';
                    break;
            };

            button.innerText = `${hours} ${Math.round(allTime%60)} ${minutes}`;
        }
    }
};