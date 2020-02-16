//obiekt przechowujacy podsumowanie gry
const gameSummary = {
    number: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: '',
    aiHand: '',
}


//pobranie grafik 
const hands = [...document.querySelectorAll('.select img')]

const handSelection = (e) => {
    game.playerHand = e.target.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = ''); //zdjęcie z każdego img shadowa
    e.target.style.boxShadow = '0 0 0 4px yellow'
    // console.log(game.playerHand)
}
//wybór komputera
const aiChoice = () => {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    //  console.log(aiHand)
    return aiHand;
}
//sprawdzenie wyniku
const checkResult = (player, ai) => {
    if (player === ai) {
        return 'draw'
    } else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')) {
        return 'win'
    } else {
        return 'loss'
    }
}
//Publikacja wyników
const publishResult = (player, ai, result) => {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.number;
    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'wygrałeś !!!'
    } else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = 'przegrałeś'
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'remis :)'
    }

}
//resetowanie wyboru gracza
const endGame = () => {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = ''

}
//FUNKCJA STERUJĄCA
const startGame = () => {
    if (!game.playerHand) {
        return alert('wybierz dłoń !!!');
    }
    game.aiHand = aiChoice();

    const gemeResult = checkResult(game.playerHand, game.aiHand);
    console.log(gemeResult);
    publishResult(game.playerHand, game.aiHand, gemeResult);
    endGame()
}


//dodanie zdarzenia na każdy element img
hands.forEach(hand => hand.addEventListener('click', handSelection))


document.querySelector('.start').addEventListener('click', startGame)