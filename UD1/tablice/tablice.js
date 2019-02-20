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
array.innerHTML = produkty.sort().reverse()
array.innerHTML += "<br>-------<br>";
array.innerHTML += produkty