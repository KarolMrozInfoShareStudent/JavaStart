const btn = document.querySelector('button')
const div = document.querySelector('div')

const names = ['Iwona', 'Malina','Luiza','Joanna','Ewa']

const nameGenerator = () =>{
    const index = Math.floor(Math.random() * names.length)
    div.textContent = `Imię dla Twojego dziecka to ${names[index].toUpperCase()}`
    console.log('dzi')
}


btn.addEventListener('click', nameGenerator)