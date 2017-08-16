//Countr Made By Joshua Britz

function counterUp(el, speed, delay) {
    var elements = window.document.getElementsByClassName(el);
    var counts = [];
    for (var i in elements) {
        counts.push(parseInt(elements[i].innerHTML));
        elements[i].innerHTML = '0';
    }
    setTimeout(function () {
        for (var i in elements) {
            goUp(i, elements, counts, speed);
        }
    }, delay);
}

function goUp(c, elements, counts, time) {
    var cnt = 0;
    var speed = time / counts[c];
    var cup = setInterval(function () {
        if (cnt != counts[c] + 1) {
            elements[c].innerHTML = cnt;
            cnt++;
        } else {
            clearInterval(cup);
        }
    }, speed)
}

function timeR(updateTime) {
    var el = document.getElementById("clock");
    getTime(el);
    setInterval(function () {
        getTime(el);
    }, updateTime)

}

function getTime(el) {
    var time = new Date();
    var Hours = time.getHours();
    var Minutes = time.getMinutes();
    var Seconds = time.getSeconds();

    Minutes = (Minutes < 10 ? "0" : "") + Minutes;
    Seconds = (Seconds < 10 ? "0" : "") + Seconds;

    var period = (Hours < 12) ? "AM" : "PM";
    Hours = (Hours > 12) ? Hours - 12 : Hours;
    Hours = (Hours == 0) ? 12 : Hours;

    var currentTimeString = Hours + ":" + Minutes + ":" + Seconds + " " + period;

    el.innerHTML = currentTimeString;
}

function counterDown(el, day, month, year, time, finished) {
    var timeTo = day + ' ' + month + ', ' + year + ' ' + time;
    var countDownDate = new Date(timeTo).getTime();
    var ID = document.getElementById(el);

    updateCountDown(countDownDate, ID)

    var x = setInterval(function () {
        var distance = updateCountDown(countDownDate, ID);

        if (distance < 0) {
            clearInterval(x);
            ID.innerHTML = finished;
        }
    }, 1000);
}

function updateCountDown(countDownDate, ID) {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    ID.innerHTML = days + "<t>d</t> " + hours + "<t>h</t> " + minutes + "<t>m</t> " + seconds + "<t>s</t> ";

    return distance;
}



