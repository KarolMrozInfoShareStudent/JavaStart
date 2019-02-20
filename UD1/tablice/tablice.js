// Przydatne metody obiektu array
var produkty = 
[
    "JavaScript",
    "Java",
    "CSS",
    "Python"
];

var tmp= 
[
    "Ajxksk",
    "Placek"
]
produkty[produkty.length] = "ostatni"
var array =document.getElementById("rezultat");
array.innerHTML = produkty.splice(1,2, "jeden", "dwa", tmp)
array.innerHTML += "<br>-------<br>";
array.innerHTML += produkty

/*
 * metody użyteczne:
 * concat od concatanate (powiązać) łączy / wiąże ze sobą dwie tablice
 * join - połączyć elementy tablicy w określony przez nas sposób
 * pop - usunąć ostatni element tablicy i go zwrócić do dalszej operacji
 * push - popchnąć element na koniec tablicy, zwraca długość tablicy
 * shift - przesunąć (usunąć pierwszy element z tablicy i go zwrócić)
 * unshift - przesuwa wszystko o 1 element i dodaje nowy element
 * liczby.sort(function(a, b){ return a - b;}); - sortuje rosnąco, gdy b - a to malejąco, a domyślnie sortuje stringi
 * reverse - odwróć kolejność el. w tablicy
 * slice - kroić - od <1,3]
 * splice - arg1 - od którego el. ma zaczać usuwać, arg2 - il. el ma usunąć - lepić
 *
 */


