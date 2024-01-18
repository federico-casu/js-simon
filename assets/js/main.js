

// Descrizione:
// fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

const countdownHtml = document.getElementById('countdown');
const now = new Date();
const tomorrow = new Date();
const nowMilliseconds = now.getTime();

tomorrow.setDate(19);
tomorrow.setHours(9, 30, 0);

const tomorrowMilliseconds = tomorrow.getTime();
let countdownSeconds = (tomorrowMilliseconds - nowMilliseconds) / 1000;
// let countdownSeconds = 10;
let seconds = countdownSeconds % 60;
let minutes = ((countdownSeconds - seconds) / 60) % 60;
let hours = ((((countdownSeconds - seconds) / 60) - minutes) / 60);

let clock;

clock = setInterval(function (){
    countdownHtml.innerHTML = `<h1>Mancano <br> ${hours}:${minutes}:${seconds} <br>alla correzione dell'esercizio</h1>`;
    seconds--;
    if (seconds < 0) {
        if (minutes > 0) {
            --minutes;
            seconds = 59;
        } else if (hours > 0) {
            --hours;
            minutes = 59;
            seconds = 59;
        } else {
            clearInterval(clock);
            countdownHtml.innerHTML = `<h1>E' ora di correggere l'esercizio!</h1>`;
        }
    }
}, 1000);

