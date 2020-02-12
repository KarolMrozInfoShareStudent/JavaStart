//obiekt przechowujacy podsumowanie gry
const gameSummary ={
    number: 0,
    wins: 0,
    losses:0,
    draws:0,
}

const game ={
    playerHand: '',
    aiHand: '',
}


//pobranie grafik 
const hands = [...document.querySelectorAll('.select img')]

const handSelection = (e)=> {
    game.playerHand = e.target.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = ''); //zdjęcie z każdego img shadowa
    e.target.style.boxShadow = '0 0 0 4px yellow' 
    // console.log(game.playerHand)
}

const aiChoice = () =>{
 const aiHand = hands[Math.floor(Math.random()*3)].dataset.option;
//  console.log(aiHand)
 return aiHand;
} 
//FUNKCJA STERUJĄCA
const startGame = () =>{
    if(!game.playerHand){
       return alert('wybierz dłoń !!!')
    }
    game.aiHand = aiChoice()
}


//dodanie zdarzenia na każdy element img
hands.forEach(hand => hand.addEventListener('click', handSelection) )


document.querySelector('.start').addEventListener('click', startGame)