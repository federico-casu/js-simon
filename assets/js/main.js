

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

let clock;

clock = setInterval(function (){
    countdownHtml.innerHTML = `<h1>Mancano ${countdownSeconds} secondi alla correzione dell'esercizio</h1>`;
    countdownSeconds--;
}, 1000);

if (countdownSeconds === 0) {
    clearInterval(clock);
}