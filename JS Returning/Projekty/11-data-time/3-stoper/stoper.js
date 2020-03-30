const btnTime = document.querySelector('.main');
const btnreset = document.querySelector('reset')
const result = document.querySelector('.time div')

let time = 0;
let active = false

const stoper = () => {
    btnTime.classList.toggle('active')
    if(!active){
        active = !active;
        btnTime.textContent = 'Pauza'
    }else{
        active = !active
        btnTime.textContent = 'Start'
    }
    console.log(active)
}



btnTime.addEventListener('click', stoper);
btn.result.addEventListener('click', reset)