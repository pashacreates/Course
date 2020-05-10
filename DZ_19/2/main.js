const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', () => {
    fileInput.nextElementSibling.innerText = fileInput.value.split('\\').pop();
});

const errorMes = document.createElement('div');
fileInput.addEventListener('click', () => {
    document.querySelector('.file-name').classList.remove('error');
    errorMes.innerText = ''
});

const but = document.getElementById('button');
but.addEventListener('click', () => {

    if (fileInput.value == '') {
        document.querySelector('.file-name').classList.add('error');
        errorMes.classList.add('error-mes');
        errorMes.innerText = 'Please, choose a file'
        document.querySelector('.file-name').prepend(errorMes);
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        document.querySelector('form').classList.remove('start');
        getCountSymbol(reader.result);
    }
    reader.readAsText(file);

});

function getCountSymbol(text) {
    let symbols = [];
    for (let i = 0; i < text.length; i++) {
        if (!symbols.includes(text[i])) {
            symbols.push(text[i]);
        }
    }
    let data = symbols.map(function(item) {
        item = {
            symbol: item,
            count: 0
        }
        for (let i = 0; i < text.length; i++) {
            if (item.symbol == text[i]) {
                item.count++;
            }
        }
        return item;
    })
    setTimeout(renderResult, 400, data);
}

function renderResult(data) {
    data.sort((a, b) => b.count - a.count);
    const result = document.getElementById('result');
    result.innerHTML = `
    <thead>
        <th>symbol</th>
        <th>number of repetitions</th>
    </thead>
    <tbody></tbody>
    `;
    data.forEach(item => {
        if (item.symbol == ' ') {
            item.symbol = '[space]';
        }
        if (item.symbol == '\n') {
            item.symbol = '&crarr;';
        }
        result.firstElementChild.nextElementSibling.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${item.symbol}</td>
            <td>${item.count}</td>
        </tr>
        `);
    });
}