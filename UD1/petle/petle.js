// petle

var produkty = 
[
    "JavaScript",
    "Java",
    "CSS",
    "Python",
    "React",
    "JsX"
];

var rezultat = document.getElementById("rezultat");

var i = 0

while(i < produkty.length)
{
    rezultat.innerHTML += produkty[i] + "<br>";
    i++
}