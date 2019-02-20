
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
test.onmouseover = zmienKolor;
test.onmouseleave = zmienKolor2;

plus.onclick =plusSize;

minus.onclick = minusSize;
