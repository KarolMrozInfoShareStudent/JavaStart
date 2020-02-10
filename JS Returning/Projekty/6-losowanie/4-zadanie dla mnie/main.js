const advices = ['zjedz kanapkę','zjedz marsa'];
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const h1 = document.querySelector('h1');
const btnShowOptions = document.querySelector('.showOptions')

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newAdvice = input.value;
    if (input.value.length) {
        for (advice of advices) {
            if (newAdvice === advice) {
                alert('to już jest!!!')
                return
            }
        }
        advices.push(newAdvice)
        input.value = ''
        console.log(advices)
    }
}
btnAdd.addEventListener('click', addAdvice)


const showAdvice = () =>{
    if (advices.length){
        h1.textContent = advices[Math.floor(Math.random() * advices.length)]
    }else(
        h1.textContent = ''
    )
}
btnShowAdvice.addEventListener('click', showAdvice)


const showOptions = () => {
    if(advices.length){
        alert(advices)
    }
}
btnShowOptions.addEventListener('click', showOptions)

const cleanAdvices = (e) =>{
    e.preventDefault();
    if(advices.length){
        for(let i = 0; i < advices.length; i++){
           advices.splice(i)
            console.log(advices)
        }   
    }
}
btnClean.addEventListener('click', cleanAdvices)

