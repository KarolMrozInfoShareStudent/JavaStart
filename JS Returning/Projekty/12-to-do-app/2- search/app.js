const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) =>{
        const searchText = e.target.value.toLowerCase();
        console.log(searchText);
        let tasks = [...liElements];
        tasks = tasks.filter(liTask => liTask.textContent.toLowerCase().includes(searchText)) //metoda includes sprawdza czy liTask zawiera podany text;
        ul.textContent = '';
        tasks.forEach(li => ul.appendChild(li))      
}


input.addEventListener('input', searchTask)