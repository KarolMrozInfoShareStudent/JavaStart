const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
},
{
    img: "images/img2.jpg",
    text: 'Drugi tekst'
},
{
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
}];

//Zmienne
const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const time = 2000;
let active = 0;
const dots = [...document.querySelectorAll('.dots span')]

//Implementacja
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active')
}



const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0
    }
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    //Zmiana kropek
    changeDot()

}


const keyChangeSlide = (e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(trol)
        e.keyCode == 37 ? active-- : active++
    }
    if (active === slideList.length) {
        active = 0
    } else if (active < 0) {
        active = slideList.length - 1
    }
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    //Zmiana kropek
    changeDot()
    trol = setInterval(changeSlide, time)
    console.log(active)
}

let trol = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide)



