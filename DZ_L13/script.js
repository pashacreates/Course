//Задача 1
const input = document.getElementById('input');
input.addEventListener('keyup', function() {
    this.value = this.value.replace(/[^aAeEyYuUiIoO]/g, '')
})

//Задача 2
const contextMenu = document.getElementById('contextMenu');
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showMenu(e.pageX, e.pageY);
    viewTagList(e.target.tagName, e.path);
});
document.addEventListener('click', function() {
    contextMenu.classList.add('invisible')
})
contextMenu.addEventListener('click', function(e) {
    alert(`${e.target.innerText}`)
    e.stopPropagation();
})

function showMenu(x, y) {
    contextMenu.classList.remove('invisible')
    contextMenu.style.top = y + 'px';
    contextMenu.style.left = x + 'px';
}

function viewTagList(elemA, elemB) {
    contextMenu.firstElementChild.innerText = 'Вы попали на тэг ' + elemA;
    contextMenu.firstElementChild.nextElementSibling.innerText = '';
    for (let i = 1; i < (elemB.length - 2); i++) {
        contextMenu.firstElementChild.nextElementSibling.insertAdjacentHTML('beforeend', `
        <li>который лежит в тэге ${elemB[i].tagName}</li>
        `)
    }
}

//Задача 3
document.getElementById('textWithLinks').addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        confirm('Вы уверены, что хотели бы узнать что такое "' + e.target.innerText + '"?') ? () => { return } : e.preventDefault();
    } else { return }
})