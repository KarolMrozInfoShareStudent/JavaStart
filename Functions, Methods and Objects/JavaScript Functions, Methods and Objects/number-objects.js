var originalNumber = 10.23456;
var msg3 = "<p class='opis'>Obiekty globalne, obiekt number/Praca z liczbami dziesiętnymi </p>";
msg3 += "<h2>loliczba początkowa</h2><p>" + originalNumber + "</p>";
msg3 += "<h2>3 miejsca po przecinku</h2><p>" + originalNumber.toFixed(3) + "</p>";
msg3 += "<h2>3 cyfry</h2><p>" + originalNumber.toPrecision(3) + "</p>";
var elMsg5 = document.getElementById("info5");

elMsg5.innerHTML = msg3;
