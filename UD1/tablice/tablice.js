// Przydatne metody obiektu array
var produkty = 
[
    "JavaScript",
    "Java",
    "CSS",
    "Python"
];
produkty[produkty.length] = "ostatni"
var array =document.getElementById("rezultat");
array.innerHTML = produkty.length;
array.innerHTML += "<br>------<br>";
array.innerHTML += produkty