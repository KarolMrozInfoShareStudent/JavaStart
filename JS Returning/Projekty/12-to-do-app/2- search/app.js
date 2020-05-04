const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) =>{
    console.log(e.target.value)
}


input.addEventListener('input', searchTask)