var score1 = 8;
var score2 = 8;
var pass1 = 9;
var pass2 = 7;


var minPass3 = (score1 >= pass1) || (score2 >= pass2);

var msg3 = '<h3>Użycie logicznego or i not</h3>' + 'Konieczne powtorzenie testu: ' + !(minPass3);


var el3 = document.getElementById('answer3');
el3.innerHTML = msg3;