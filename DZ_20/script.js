function getCoords() {
    return new Promise(function(resolve, reject) {
        window.navigator.geolocation.getCurrentPosition(function(pos) {
            resolve(pos.coords);
        }, function(err) {
            reject(err.message);
        });
    });
}

getCoords().then(function(coords) {
    console.log(coords);
    renderResult('Из браузера', coords.latitude, coords.longitude);
}).catch((error) => {
    console.log(error);
});

function getXhr(path) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.onload = function() {
            const data = JSON.parse(this.responseText);
            resolve(data);
        }
        xhr.onerror = () => reject();
        xhr.send(null);
    });
}

getXhr('https://freegeoip.app/json/').then(function(coords) {
    console.log(coords);
    renderResult('Из API freegeoip.app', coords.latitude, coords.longitude);
}).catch((error) => {
    console.log(error);
});


async function getDist() {
    const coords = await getCoords();
    const coordsIp = await getXhr('https://freegeoip.app/json/');
    const toRad = Math.PI / 180;
    const lat1 = coords.latitude,
        long1 = coords.longitude,
        lat2 = coordsIp.latitude,
        long2 = coordsIp.longitude;
    const R = 6371; //Радиус Земли в км
    //используя формулу гаверсинусов находим расстояние 
    const dist = 2 * R * Math.asin(((Math.sin((lat2 * toRad - lat1 * toRad) / 2) ** 2) +
        (Math.cos(lat1 * toRad) * Math.cos(lat1 * toRad) * (Math.sin((long2 * toRad - long1 * toRad) / 2) ** 2))) ** (1 / 2));

    renderDist((dist * 1000).toFixed());
}
getDist();

function renderDist(dist) {
    const distResult = document.getElementById('dist');
    distResult.innerText = 'Расстояние между точками состовляет ' + dist + ' метров.';

}

const tbody = document.getElementById('tbody');

function renderResult(td1, td2, td3) {
    tbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${td1}</td>
            <td>${td2}</td>
            <td>${td3}</td>
        </tr>
    `);
};

async function getNearbyCities() {
    const coords = await getCoords();
    const cities = await getXhr(`https://www.metaweather.com/api/location/search/?lattlong=${coords.latitude},${coords.longitude}`);

    console.log(cities);
    renderWeather(cities);
}

getNearbyCities();

async function renderWeather(cities) {
    const weather = document.getElementById('weather');
    for (let i = 0; i < 5; i++) {
        const data = await getXhr(`https://www.metaweather.com/api/location/${cities[i].woeid}/`);
        console.log(data);
        const tr = document.createElement('tr');
        data.consolidated_weather.forEach(item => {
            tr.insertAdjacentHTML('beforeend', `
                <td>
                    <p>${item.applicable_date}</p>
                    <img src = 'https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg'>
                    <p>${item.min_temp.toFixed()} - ${item.max_temp.toFixed()} t &#176;C</p>
                    <p>Влажность ${item.humidity.toFixed()}%</p>
                    <p>Ветер ${item.wind_speed.toFixed()} mph</p>
                </td>
            `)
        });
        tr.insertAdjacentHTML('afterbegin', `<td>${data.title}</td>`)
        weather.append(tr)
    }
}