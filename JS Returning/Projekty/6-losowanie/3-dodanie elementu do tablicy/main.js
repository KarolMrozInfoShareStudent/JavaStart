const names = [];
const btn = document.querySelector('button')
const div = document.querySelector('div')

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input')
    const newName = input.value
    if (input.value.length) {
        for (name of names){
            if(newName === name){
                alert('to już jest')
                return
            } 
        }
        names.push(newName)
        div.textContent += newName + ', ';
        input.value = '';
    }
}
btn.addEventListener('click', addName)