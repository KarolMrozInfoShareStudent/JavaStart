// petle w petli

var tabliczkaMnozenia = "<table>";

for (var i =1; i <= 10 ; i++)
{
    tabliczkaMnozenia += "<tr>"
    for(var j = 1; j <=10; j++)
    tabliczkaMnozenia += "<td>" + i * j + "</td> ";

    tabliczkaMnozenia += "</tr>"
}
tabliczkaMnozenia += "</table>";
var rezultat = document.getElementById("rezultat");

rezultat.innerHTML = tabliczkaMnozenia;
