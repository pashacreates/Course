const data = new XMLHttpRequest();
data.open('GET', 'prods.json', true);
data.onload = function() {
    const prods = JSON.parse(this.responseText)
    renderProds(prods);
};
data.send(null);
const list = document.getElementById('list');
const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
const cartBut = document.querySelector('.cart');
cartBut.firstElementChild.nextElementSibling.innerText = cart.length;
const cartList = document.querySelector('.cartList');

function renderProds(prods) {
    prods.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <p>${item.name}</p>
        <img ${item.img}>
        <p>${item.descr}</p>
        <p>Quantity in stock: ${item.quantity}</p>
        `;
        const but = document.createElement('button');
        but.classList.add('to-cart')
        but.innerText = `Add to Cart`;
        but.setAttribute('data-cart', 0);
        cart.forEach(elem => {
            if (elem == item.name) {
                but.setAttribute('data-cart', 1);
                but.classList.toggle('remove');
                but.innerText = `Remove from Cart`;
            }
        })
        but.setAttribute('data-name', item.name);
        li.appendChild(but);
        list.appendChild(li);
        renderCartList();
    });
};

function renderCartList() {
    cartList.innerText = '';
    cart.forEach(item => {
        cartList.insertAdjacentHTML('beforeend', `
        <li>${item}</li>
        `)
    });
}

list.addEventListener('click', function(e) {
    if (e.target.dataset.cart == 0) {
        e.target.dataset.cart = 1;
        e.target.classList.toggle('remove');
        e.target.innerText = `Remove from Cart`;
        cart.push(e.target.dataset.name);
    } else {
        const cartIndex = cart.indexOf(e.target.dataset.name);
        if (cartIndex !== -1) {
            cart.splice(cartIndex, 1);
            e.target.dataset.cart = 0;
            e.target.classList.toggle('remove');
            e.target.innerText = `Add to Cart`;
        }
    }
    cartBut.firstElementChild.nextElementSibling.innerText = cart.length;
    localStorage.cart = JSON.stringify(cart);
    renderCartList();
});


cartBut.addEventListener('click', function() {
    cartList.classList.toggle('unvisible')

})