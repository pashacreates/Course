const but = document.getElementById('but');
const desc = document.getElementById('desc');
const loc = document.getElementById('loc');
const request = document.querySelector('.request');
const start = document.querySelector('.start');
const preloader = document.getElementById('preloader')

but.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    preloader.innerHTML = `
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    `
    xhr.open('GET', `https://jobs.github.com/positions.json?description=${desc.value}&location=${loc.value}`, true);
    request.classList.add('request-la');
    xhr.onload = function() {
        request.classList.remove('request-start');
        start.classList.add('end')
        preloader.innerHTML = ``;
        renderResult(this.responseText);
    }
    xhr.send(null);
});

function renderResult(dataJSON) {
    const data = JSON.parse(dataJSON);
    result = document.querySelector('.job-list');
    result.innerText = '';
    data.forEach((item, index) => {
        let date = new Date(Date.parse(item.created_at));
        result.insertAdjacentHTML('beforeend', `
        <li>
            <h3>${item.title}</h3>
            <div class="row">
                <div class='company-info'>
                    <p>Published on ${date.toLocaleDateString()}</p>
                    <a href='${item.company_url}' >
                        <p>${item.company}</p>
                    </a>
                    <p>${item.location}</p>
                    <p>${item.type}</p>
                </div>
                <div class='logo' id="company#${index}"></div>
            </div>
            <div class='desc'>
                <p>${item.description}</p>
                <a href='${item.url}'>Look at GitHub</a>
            </div>
        </li>
    `);
        if (item.company_logo !== null) {
            const logo = document.getElementById(`company#${index}`);
            logo.insertAdjacentHTML('beforeend',
                `<a href='${item.company_url}' ><img src="${item.company_logo}" alt ='${item.company}'></a>`
            );

        }
    });

}