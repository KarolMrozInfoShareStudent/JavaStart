const pass6 = 10;
const score6 = 75;
var msg6;


if (score6 >= pass6){
    msg6 = '<h3>Użycie polecenia if</h3>' + '<p>Gratulacje zaliczyłeś ! </p>';
}else {
    msg6 = '<h3>Użycie polecenia if</h3>' + '<p>Nie zaliczyłeś ! </p>';
}


var el6 = document.getElementById('answer6');
    el6.innerHTML = msg6