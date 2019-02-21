// addEventListener
function plusSize()
{
test.className = "plusFont"
}


function minusSize()
{
test.className = "minusFont"
}

function zmienKolor()
{
    test.className = "zmienKolorRed";
}
function zmienKolor2()
{
    this.className = "zmienKolorGreen";  
}

var test = document.getElementById("test");
var plus = document.getElementById("plus")
var minus = document.getElementById("minus")
test.addEventListener('mouseover', zmienKolor)
test.addEventListener('mouseout', zmienKolor2)

plus.addEventListener('click', plusSize)

minus.addEventListener('click', minusSize)

