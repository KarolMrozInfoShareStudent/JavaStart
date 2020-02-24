let number = 0;

add =() => {
    number++
    document.body.textContent = `aktualny stan licnzika kliknięć to ${number}`
}

document.addEventListener('click',add)