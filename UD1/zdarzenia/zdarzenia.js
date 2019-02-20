

function minusSize()
{
this.className = "minusFont"
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
    test.className = "plusFont"
    console.log(test)
   
    
}

minus.onclick = function(){
    test.className = "minusFont"
    console.log(test)
}
