// Создать массив товаров: изображение, название, краткое описание, кол-во на складе и цену. 
//Сгенерировать список в HTML. Стилизовать страницу так, чтобы товары были выведены в виде сетки,
// по 4 товара в строку. Стилизовать сами карточки товаров.
const prod = [{
    name: 'apple',
    img: 'src=img/apple.jpg',
    descr: 'green apple',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 400) + 200) / 100,
}, {
    name: 'avocado',
    img: 'src=img/avocado.jpg',
    descr: 'avocado from Mexico',
    quantity: Math.round(Math.random() * 100),
    price: (Math.round(Math.random() * 1000) + 200) / 100,
}, {
    name: 'banana',
    img: 'src=img/banana.jpg',
    descr: 'green banana',
    quantity: Math.round(Math.random() * 5000),
    price: (Math.round(Math.random() * 200) + 200) / 100,
}, {
    name: 'grapefruit',
    img: 'src=img/grapefruit.jpg',
    descr: 'grapefruit with bitterness',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 400) + 200) / 100,
}, {
    name: 'kiwi',
    img: 'src=img/kiwi.jpg',
    descr: 'this is not bird',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 400) + 200) / 100,
}, {
    name: 'mango',
    img: 'src=img/mango.jpg',
    descr: 'Я красивый и вкусный. Ты мог бы купить меня, но тут нет для этого кнопки.',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 1000) + 500) / 100,
}, {
    name: 'orange',
    img: 'src=img/orange.jpg',
    descr: 'big orange',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 500) + 200) / 100,
}, {
    name: 'pear',
    img: 'src=img/pear.jpg',
    descr: 'pear weighs - you can not eat',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 400) + 200) / 100,
}, {
    name: 'papaya',
    img: 'src=img/papaya.jpg',
    descr: 'pa pa pa-pa-pa-ya',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 700) + 200) / 100,
}, {
    name: 'pineapple',
    img: 'src=img/pineapple.jpg',
    descr: 'A pineapple is a tropical fruit with a tough outer shell that looks like a pine cone with edible yellow fruit inside',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 400) + 400) / 100,
}, {
    name: 'coconut',
    img: 'src=img/coconut.jpg',
    descr: 'Coconut he and coconut in Africa',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 300) + 300) / 100,
}, {
    name: 'quince',
    img: 'src=img/quince.jpg',
    descr: 'What is quince?',
    quantity: Math.round(Math.random() * 500),
    price: (Math.round(Math.random() * 1200) + 500) / 100,
}, ];

for (let i = 0; i < prod.length; i++) {
    const list = document.getElementById('list');
    const li = document.createElement('li');
    li.innerHTML = `
        <p>${prod[i].name}</p>
        <img ${prod[i].img}>
        <p>${prod[i].descr}</p>
        <p>Price: ${prod[i].price}$</p>
        <p>Quantity in stock: ${prod[i].quantity}</p>
        `;
    list.appendChild(li);
}