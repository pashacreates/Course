const staff = [{
    fullName: 'Иванов Андрей Петрович',
    post: 'Директор',
    startDate: new Date(2017, 02, 07),
    salary: 2000
}, {
    fullName: 'Хитрая Анна Алексеевна',
    post: 'Бухгалтер',
    startDate: new Date(2016, 09, 12),
    salary: 3000
}, {
    fullName: 'Сидоренко Артем Павлович',
    post: 'Менеджер',
    startDate: new Date(2019, 05, 20),
    salary: 1000
}, {
    fullName: 'Соловей Виталий Семёнович',
    post: 'Менеджер',
    startDate: new Date(2020, 01, 03),
    salary: 900
}];
const tbody = document.getElementById('tbody');

const renderStaff = function() {
    tbody.innerText = "";
    for (let i = 0; i < staff.length; i++) {
        tbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${staff[i].fullName}</td>
            <td>${staff[i].post}</td>
            <td>${staff[i].startDate.toLocaleDateString()}</td>
            <td>${staff[i].salary}</td>
            <td><button class="btn btn-danger" id='${i}'>Удалить</button></td>
        </tr>
        `)
    }
};
renderStaff();

tbody.addEventListener('click', function(e) {
    if (e.target.nodeName === 'BUTTON') {
        e.target.parentNode.parentNode.remove();
        staff.splice(e.target.getAttribute('id'), 1);
        renderStaff();
    }
});

const add = document.getElementById('add');
add.addEventListener('click', function() {
    const newEmployee = {
        fullName: document.getElementById('fullName').value,
        post: document.getElementById('post').value,
        startDate: new Date(document.getElementById('startDate').value),
        salary: document.getElementById('salary').value,
    };
    staff.push(newEmployee);
    renderStaff();
});

const sortByDate = document.getElementById('sortByDate');
sortByDate.addEventListener('click', function() {
    staff.sort((a, b) => a.startDate - b.startDate);
    renderStaff();
});

sortByDate.addEventListener('dblclick', function() {
    staff.sort((a, b) => b.startDate - a.startDate);
    renderStaff();
});

const sortBySalary = document.getElementById('sortBySalary');
sortBySalary.addEventListener('click', function() {
    staff.sort((a, b) => a.salary - b.salary);
    renderStaff();
});

sortBySalary.addEventListener('dblclick', function() {
    staff.sort((a, b) => b.salary - a.salary);
    renderStaff();
});