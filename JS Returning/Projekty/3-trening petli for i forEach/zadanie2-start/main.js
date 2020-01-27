let size = 10;
let orderElement = 0;


const init = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.textContent = 'Dodaj 10 elementów listy'
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    btn.addEventListener('click', createLiElements);

}

const createLiElements = () => {
    const ulElement = document.querySelector('ul');
    ulElement.style.listStyle = 'none'

    const liIndex = 10
    for (let i = 0; i < liIndex; i++) {
        const liItem = document.createElement('li');
        ulElement.appendChild(liItem);
        liItem.style.fontSize = `${size++}px`
        orderElement++
        const liItems = document.querySelectorAll('li')
        for (let i = 0; i < liItems.length; i++) {
            liItems[i].textContent = `numer indexu ${i + 1}`;
        }
    }

}

init()