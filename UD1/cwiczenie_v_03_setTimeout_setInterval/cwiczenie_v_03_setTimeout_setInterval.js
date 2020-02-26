// setTimeout - metoda ktora wykonuje operacje po okreslonym czasie 
// setInterval - metoda ktora wykonuje operacje co interwał (co okreslony przez nas czas w nieskonczoność)

const poczatkowaWartosc = document.querySelector("#poczatkowaWartosc");
const statStoper = document.getElementById("start");
const zatrzymajStoper = document.getElementById("stop");
const wynik = document.getElementById("wynik");

const stopWatch = (wynik, liczba) =>
{
    wynik.textContent = --liczba;
    if(liczba <= 0)
    
    return
    setTimeout(()=>
    {
        stopWatch(wynik, liczba)
    },1000
    )
}

    statStoper.onclick = () =>{
        const poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;
        wynik.textContent = poczatkowaWartosc;
        setTimeout(()=>
        {
            stopWatch(wynik, poczatkowaWartosc)
        }
        ,1000);
    };

