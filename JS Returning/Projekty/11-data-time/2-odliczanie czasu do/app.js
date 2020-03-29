
const endTime = new Date(`2020-03-29 23:59:59`);
const spanDay = document.querySelector('span.days');
const spanHours = document.querySelector('span.hours');
const spanMinutes = document.querySelector('span.minutes');
const spanSeconds = document.querySelector(`span.seconds`)
// const time = Math.floor((endTime - nowTime)/1000)

setInterval(() => {
    const nowTime = new Date().getTime();

    const time = endTime - nowTime;

    const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));

    const hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);

    const second = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

    spanDay.textContent = `${days} d:`;
    spanHours.textContent = `${hours} h:`;
    spanMinutes.textContent = `${minutes} m:`;
    spanSeconds.textContent = `${second}s`

}, 1000)