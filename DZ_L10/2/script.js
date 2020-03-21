const clock = document.getElementById('clock');
const getTime = function() {
    const time = new Date;
    let h = time.getHours();
    if (h < 10) h = '0' + h;
    let m = time.getMinutes();
    if (m < 10) m = '0' + m;
    let s = time.getSeconds();
    if (s < 10) s = '0' + s;
    let ms = time.getMilliseconds();
    let dots = ':';
    if (ms < 500) dots = ' ';
    clock.innerText = h + dots + m + dots + s;
}

setInterval(getTime, 100)