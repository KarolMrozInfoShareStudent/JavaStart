var score1 = 90;
var score2 = 95;
var highScore1 = 75;
var highScore2 = 95; 

var comparison = (score1 + score2) > (highScore1 + highScore2);

var el1 = document.getElementById('answer1');
el1.innerHTML = '<h3>Porównanie dwóch wyrażeń</h3>' + 'Nowy najwyższy wynik: ' + comparison;