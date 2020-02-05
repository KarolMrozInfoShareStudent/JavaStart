const btn = document.querySelector('button');
const section = document.querySelector('section');
const elNumber = 1000
const caracters = 'QWERTYUIOPKJHGFDSAZXCVBNM1234567890';
const codeLength = 10;

const codeGenerator = () => {
    let code = ''

    for (let i = 1; i < elNumber + 1; i++) {

        const div = document.createElement('div');
        div.textContent = `Kod nr ${i}: `
        for (let n = 0; n < 10; n++) {
            code = caracters[Math.floor(Math.random() * caracters.length)]
            div.textContent += code
        }
        elements = section.appendChild(div)
    }
}

btn.addEventListener('click', codeGenerator)