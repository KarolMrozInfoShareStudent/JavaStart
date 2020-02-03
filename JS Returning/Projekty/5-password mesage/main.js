const input = document.getElementById('pass');
const div = document.querySelector('.message')
const passwords = ['user', 'zima', 'Rege'];
const messages = ['dziła dziła działa', 'w tym roku nie będzie', 'wygrał życie']

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;
    console.log(text)
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index]
        }
    })

})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})
