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
person = {
    imie: "Arek",
    nazwisko: "Włodarczyk",
    wiek: "26"
 };
 
 var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");
 
 
for (var property in kursyProgramowania)
{
    if (typeof(kursyProgramowania[property]) !=="object")
    break;
    alert(kursyProgramowania[property].innerHTML)
}

