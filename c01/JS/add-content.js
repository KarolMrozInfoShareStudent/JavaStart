/*Ten skrypt wyświetla użytkownikowi test powitania wybrany na podstawie aktualnej godziny*/

var today = new Date(); //Utwrzenie nowego oboetu daty
var hourNow = today.getHours();  //Ustalenie aktualnej godziny 
var greeting;

if (hourNow > 18) {
    greeting = 'Dobry Wieczór!';
} else if (hourNow > 12) {
    greeting = 'Dzien Dobry!';
} else if (hourNow > 0) {
    greeting = 'Dzień Dobry!';
} else {
    greeting = 'Witamy!';
}

document.write('<h3>' + greeting + '</h3>');