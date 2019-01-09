var score5 = 10;
var msg5 = '';



function congratulate(){
    msg5 = '<h3>Użycie polecenia if "funkcja"</h3>';
}
if (score5 >=1){
    congratulate();
    msg5 += '<p>Gratulacje ! </p>'  + 'Przechodzisz do następej rundy.';
  
};

var el5 = document.getElementById('answer5');
    el5.innerHTML = msg5



