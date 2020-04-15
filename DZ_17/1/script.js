const reader = document.getElementById('reader');
const progress = document.getElementById('progress');
reader.addEventListener('scroll', (e) => {
    progress.innerText = ((reader.scrollTop + reader.offsetHeight) / reader.scrollHeight * 100).toFixed(2) + '%';
})


const travel = document.getElementById('travel');
travel.onclick = function() { loadBook('books/travel.txt') }

const kruzo = document.getElementById('kruzo');
kruzo.onclick = function() { loadBook('books/kruzo.txt') }

const idiot = document.getElementById('idiot');
idiot.onclick = function() { loadBook('books/idiot.txt') }

const preloader = `<div class="cssload-container">
<div class="cssload-loading"><i></i><i></i><i></i><i></i></div>
</div>`

function loadBook(book) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', book, true);
    reader.innerHTML = preloader;
    xhr.onload = function() {
        reader.innerText = this.responseText;
    }
    xhr.send(null);
}