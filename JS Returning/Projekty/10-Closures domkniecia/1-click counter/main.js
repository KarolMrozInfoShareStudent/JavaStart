

const add = (start = 0) => {
    let number = start;
    
    return () =>{
        number++;
        document.body.textContent = `aktualny stan licnzika kliknięć to ${number}`
    }
    
}
const counter = add()
document.addEventListener('click', counter)


const user = (name='',age) => {
    let userName = name;
    let userAge = age;
    const showName = () => {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić bronka' : 'Nie możesz kupić bronka'}`)
    }
    return showName
}

const karol = user('Karol', 40);
const luiza = user('Luiza', 17)

karol()
luiza()