//pojawienie sie elementu i powiększenie go przez kliknięcie przycisku
const button = document.querySelector('button')
const ulElement = document.querySelector('ul')
let size = 9
const liItems = document.querySelectorAll('li')



const changeSize = () => {
    ulElement.style.display = 'block';
    size++
    for (let i = 0; i < liItems.length; i++) {
        liItems[i].textContent = `element ${i+1}`
        liItems[i].style.fontSize = `${size}px`
    }

}

button.addEventListener('click', changeSize)







