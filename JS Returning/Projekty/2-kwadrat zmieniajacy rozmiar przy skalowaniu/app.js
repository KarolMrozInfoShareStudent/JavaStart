const div = document.createElement('div');
document.body.appendChild(div)

let grow = true;
let size = 0;


div.style.backgroundColor = 'balck'
div.style.width = `${size}px`
div.style.height = `${size}px`



const changeSize = () => {
    if (grow === true) {
        size +=1
        div.style.width = `${size}px`
        div.style.height = `${size}px`
    }
    else {
        size -=1
        div.style.width = `${size}px`
        div.style.height = `${size}px`
    }

    if (size >= window.innerWidth /2){
        grow = false
    }
    else if (size == 0){
        grow = true
    }

}
window.addEventListener('scroll', changeSize)
