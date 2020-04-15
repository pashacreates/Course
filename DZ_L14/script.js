//Задача 1
const contextMenu = document.getElementById('contextMenu');

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    let x = e.pageX;
    let y = e.pageY;
    if ((window.innerWidth - e.pageX) < 130) {
        x = e.pageX - 130;
    }
    if ((window.innerHeight - e.pageY) < 120) {
        y = e.pageY - 120;
    }
    showMenu(x, y);
});

document.addEventListener('click', function() {
    contextMenu.classList.add('invisible')
});

contextMenu.addEventListener('click', function(e) {
    alert(`${e.target.innerText}`)
    e.stopPropagation();
});

function showMenu(x, y) {
    contextMenu.classList.remove('invisible')
    contextMenu.style.top = y + 'px';
    contextMenu.style.left = x + 'px';
}

//Задача 2
const red = document.querySelector('.red');
const content = document.querySelector('.content');

function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
content.addEventListener('mousedown', (elem) => {
    if (elem.target.classList.contains('block')) {
        elem.target.onmousemove = function(e) {
            const block = e.target;
            block.style.left = e.pageX - block.offsetWidth + 'px';
            block.style.top = e.pageY - block.offsetHeight + 'px';
            block.style.zIndex = 100;
            if (block.offsetLeft < 0) {
                block.style.left = 0;
            }
            if (block.offsetTop < 0) {
                block.style.top = 0;
            }
            if (block.offsetLeft > content.offsetWidth - block.offsetWidth) {
                block.style.left = content.offsetWidth - block.offsetWidth + 'px';
            }
            if (block.offsetTop > content.offsetHeight - block.offsetHeight) {
                block.style.top = content.offsetHeight - block.offsetHeight + 'px';
            }
            markBlock()
        };
    }
    elem.target.onmouseup = function() {
        elem.target.onmousemove = null;
        elem.target.style.zIndex = 3;
    }

});

function markBlock() {
    const blocks = document.getElementsByClassName('block');
    let blocksCoords = [];
    for (let i = 0; i < blocks.length; i++) {
        blocksCoords.push(blocks[i].getBoundingClientRect());
    }
    blocksCoords.forEach((item, index) => {
        for (let i = 0; i < blocksCoords.length; i++) {
            if (blocksCoords[i].top - item.top == 0 && blocksCoords[i].left - item.left == 0) {
                break;
            }
            if (Math.abs(blocksCoords[i].top - item.top) < item.height && Math.abs(blocksCoords[i].left - item.left) < item.width) {
                blocks[index].classList.add('mark');
            } else {
                blocks[index].classList.remove('mark');
            }
        }
    })
}
//¯\_(ツ)_/¯