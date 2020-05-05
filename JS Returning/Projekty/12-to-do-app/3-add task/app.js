const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItem = document.querySelectorAll('li.task');
const input = document.querySelector('input')

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    // console.log(titleTask);

    if (titleTask === '') return
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button>Delate</button>';
    ul.appendChild(task);
    input.value = '';
    ;


}


form.addEventListener('submit', addTask)