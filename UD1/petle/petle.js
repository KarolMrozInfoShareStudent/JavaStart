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



for(var i =0; i < produkty.length; i++)
{
    rezultat.innerHTML += produkty[i] + "<br>";
   
}