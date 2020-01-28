let size = 10;
let orderElement = 0;


const init = () => {
    //stworzenie elementu btn (przycisku)
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.textContent = 'Dodaj 10 elementów listy'
    //stworzenie elementu ul
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    //ustawienie nasłuchiwania na przecisk metoda click
    btn.addEventListener('click', createLiElements);

}

const createLiElements = () => {
    //pobranie elementu ul
    const ulElement = document.querySelector('ul');
    ulElement.style.listStyle = 'none'
    //zmienna ile przyisków ma być dodanych
    const liIndex = 10
    for (let i = 0; i < liIndex; i++) {
        const liItem = document.createElement('li');//tworzenie elementu li
        ulElement.appendChild(liItem);//dodanie elementu li do ul
        liItem.style.fontSize = `${size++}px`//zmiana fontu
        orderElement++//zmiana numeru li
        const liItems = document.querySelectorAll('li')//pobranie listy elementów li querySelectorAll zwraca node liste
        for (let i = 0; i < liItems.length; i++) {
            liItems[i].textContent = `numer indexu ${i + 1}`;
        }
    }

}

init()