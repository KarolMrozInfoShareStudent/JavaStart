var powiedzenie = "Home sweet home";

var msg2 = "<p class='opis'>Obiekty globalne/Praca z ciągiem tekstowym na przykładzie 'Home sweet home' </p>";
    msg2 += "<h2>liczba znaków</h2><p>" + powiedzenie.length + "</p>";
    msg2 += "<h2>male litery</h2><p>" + powiedzenie.toLowerCase() + "</p>";
    msg2 += "<h2>duze litery</h2><p>" + powiedzenie.toUpperCase() + "</p>";
    msg2 += "<h2>numer znaku 12</h2><p>" + powiedzenie.charAt(12) + "</p>";
    msg2 += "<h2>pierwsze wystąpienie 'ee' </h2><p>" + powiedzenie.indexOf('ee') + "</p>";
    msg2 += "<h2>ostatnie wystapienie 'e' </h2><p>" + powiedzenie.lastIndexOf('e') + "</p>";
    msg2 += "<h2>znaki numer 8-14</h2><p>" + powiedzenie.substring(8,14) + "</p>";
    msg2 += "<h2>funkcja zastapienia</h2><p>" + powiedzenie.replace('me' , 'w' ) + "</p>";
 

var elMsg2 = document.getElementById("info4");
elMsg2.innerHTML = msg2;
