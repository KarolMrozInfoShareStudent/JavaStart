

function minusSize()
{
this.className = "plusFont"
}

function zmienKolor()
{
    this.className = "zmienKolorRed";
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

plus.onclick = function(){
    test.style.fontSize = "20px"
}

minus.onclick = function(){
    test.style.fontSize = "10px"
}
