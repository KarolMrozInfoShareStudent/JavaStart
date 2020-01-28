const h1 = document.querySelector('h1')

document.body.addEventListener('mousemove',(e) =>{
   const red = Math.floor(Math.random()*250);
   const green = Math.floor(Math.random()*250);
   const blue = Math.floor(Math.random()*250);
    h1.textContent = `${e.clientX}, ${e.clientY}`;
  const jjj=  document.body.style.background = `rgb(${red},${green},${blue})`
  console.log(jjj)

} )