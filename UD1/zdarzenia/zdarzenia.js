

function zmienKolor()
{
    this.className = "zmienKolorRed";
}
function zmienKolor2()
{
    this.className = "zmienKolorGreen";  
}

var test = document.getElementById("test");
test.onmouseover = zmienKolor;
test.onmouseleave = zmienKolor2;
  