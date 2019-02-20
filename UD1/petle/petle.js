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

var kursyPtogramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");

for (var i = 0; i < kursyPtogramowania.length ; i++)
{   if(i % 2 !==0){
    kursyPtogramowania[i].innerHTML = "parzysty: " + kursyPtogramowania[i].innerHTML
}
    else
    continue
}
