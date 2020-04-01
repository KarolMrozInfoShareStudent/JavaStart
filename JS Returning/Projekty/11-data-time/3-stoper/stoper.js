const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const result = document.querySelector('.time div');

let time = 0;
let active = false;
let idI; //zadeklarowanie zmiennej której zadaniem jest uzyskanie id funkcji setInterval(start,10)

const stoper = () => {
    btnTime.classList.toggle('active')
    if (!active) {
        active = !active;
        btnTime.textContent = 'Pauza';
        idI = setInterval(start, 10) //przypisanie do zmiennej Id funkcji setInterval
    } else {
        active = !active;
        btnTime.textContent = 'Start';
        clearInterval(idI);
    }
    console.log(active)
}

const start = () => {
    time++;
    result.textContent = (time / 100).toFixed(2)
}

const reset = () => {
    time = 0;
    active = false;
    result.textContent = '-----';
    btnTime.textContent = 'Start';
    clearInterval(idI);


}


btnTime.addEventListener('click', stoper);
btnReset.addEventListener('click', reset);