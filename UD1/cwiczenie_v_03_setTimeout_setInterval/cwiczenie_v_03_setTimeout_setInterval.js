// setTimeout - metoda ktora wykonuje operacje po okreslonym czasie 
// setInterval - metoda ktora wykonuje operacje co interwał (co okreslony przez nas czas w nieskonczoność)




window.onload = function(){
    var poczatkowaWartosc = document.querySelector("#poczatkowaWartosc");
    var statStoper = document.getElementById("start");
    var zatrzymajStoper = document.getElementById("stop");
    var wynik = document.getElementById("wynik");

    statStoper.onclick = function(){
        var poczatkowaWartosc = document.querySelector("#poczatkowaWartosc").value;
        wynik.innerHTML = poczatkowaWartosc
    }

}
