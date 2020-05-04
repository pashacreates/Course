const cont = new XMLHttpRequest();
cont.open('GET', 'JSON/tradeNets.json', true);
cont.onload = function() {
    const data = JSON.parse(this.responseText);
    renderTradeNets(data);
}
cont.send(null);

function renderTradeNets(data) {
    console.log(data);
    const tradeNets = document.getElementById('tradeNets');
    data.forEach((item) => {
        tradeNets.insertAdjacentHTML('beforeend', `
        <li class='net-item' data-shops=${item.shops} data-name=${item.name}>
            <h4>${item.name}</h4>
            <p>Год основания: ${item.fYear}</p>
            <p>Описание: <i>${item.description}</i></p>
            <p>Идентификатор: ${item.id}</p>
        </li>
        `)
    });
    const nets = document.getElementsByClassName(`net-item`);
    Array.from(nets).forEach(net => {
        net.addEventListener('click', () => {
            getTradeNetInfo(net.dataset.shops, net.dataset.name)
        })
    })
}

function getTradeNetInfo(net, netName) {
    const getShops = new XMLHttpRequest();
    getShops.open('GET', net, true);
    getShops.onload = function() {
        const data = JSON.parse(this.responseText);
        renderShops(data, netName);
    }
    getShops.send(null);
}

function renderShops(data, netName) {
    const shopList = document.getElementById('shopList');
    const info = document.querySelector('.general-info');
    shopList.innerText = '';
    data.forEach(item => {
        shopList.insertAdjacentHTML('beforeend', `
        <li>
            <p>Адрес: ${item.addres}</p>
            <p>Кол-во посетителей в день: ${item.visitorsPerDay}</p>
            <p>Площадь торгового зала: ${item.area} кв. м.</p>
            <p>Год открытия: ${item.yearOfBuild}</p>
        </li>
        `);
    })
    sumArea = data.reduce((sum, cur) => {
        return sum += cur.area;
    }, 0);
    sumVisitors = data.reduce((sum, cur) => {
        return sum += cur.visitorsPerDay;
    }, 0);
    info.innerHTML = `
    <h3>Магазины сети ${netName}:</h3>
    <p>Количество магазинов - ${data.length}</p>
    <p>Суммарна площадь магазинов - ${sumArea} кв. м.</p>
    <p>Средняя площадь магазинов - ${(sumArea/data.length).toFixed(1)} кв. м.</p>
    <p>Суммарное дневное число посетителей сети - ${sumVisitors}</p>
    `
}