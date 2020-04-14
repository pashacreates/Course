const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.csv', true);
xhr.onload = function() {
    onLoadData(xhr.responseText);
}
xhr.send(null);

function onLoadData(text) {
    const lines = text.split('\n');
    const names = lines.shift(', ').trim().split(', ');
    const items = lines.map(line => {
        const splitted = line.split(', ');
        const object = splitted.reduce((result, value, index) => ({
            ...result,
            [names[index]]: value
        }), {});
        return object;
    });
    renderTable(items, names);
}

const table = document.getElementById('table');

function renderTable(items, names) {
    table.innerHTML = `
        <thead class="thead-dark"><tr>
            <td>${names[0]}</td>
            <td>${names[1]}</td>
            <td>${names[2]}</td>
            <td>${names[3]}</td>
            <td>${names[4]}</td>
        </tr></thead>
        <tbody></tbody>
        `;
    items.forEach(item => {
        table.firstElementChild.nextElementSibling.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.position}</td>
            <td>${item.salary}</td>
            <td>${item.boss}</td>
        </tr>
        `);
    })
    sortIt(items, names)
}

function sortIt(items, names) {
    const thead = document.querySelector('thead')
    thead.addEventListener('click', function(e) {
        if (e.target.innerText == 'NAME') {
            renderTable(items.sort(function(a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }), names);
        }
        if (e.target.innerText == 'AGE') {
            renderTable(items.sort(function(a, b) {
                if (a.age > b.age) {
                    return 1;
                }
                if (a.age < b.age) {
                    return -1;
                }
                return 0;
            }), names);
        }
        if (e.target.innerText == 'POSITION') {
            renderTable(items.sort(function(a, b) {
                if (a.position > b.position) {
                    return 1;
                }
                if (a.position < b.position) {
                    return -1;
                }
                return 0;
            }), names);
        }
        if (e.target.innerText == 'SALARY') {
            renderTable(items.sort(function(a, b) {
                if (a.salary > b.salary) {
                    return 1;
                }
                if (a.salary < b.salary) {
                    return -1;
                }
                return 0;
            }), names);
        }
        if (e.target.innerText == 'BOSS') {
            renderTable(items.sort(function(a, b) {
                if (a.boss > b.boss) {
                    return 1;
                }
                if (a.boss < b.boss) {
                    return -1;
                }
                return 0;
            }), names);
        }
    })
}