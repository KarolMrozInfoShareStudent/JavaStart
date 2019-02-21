// addEventListener

function plusSize()
{   
    var fontSize = parseInt(window.getComputedStyle(test).fontSize);
    test.style.fontSize = (++fontSize) + "px";
    if(fontSize === 25 ){
        
        var a = alert("Maksymalne powiększenie")
        alert(a)
        plus.removeEventListener( 'click', plusSize);
    }else{
        plus.addEventListener( 'click', plusSize);
    }
    
    
}


function minusSize()
{
    var fontSize = parseInt(window.getComputedStyle(test).fontSize);
    test.style.fontSize = (--fontSize) + "px";
}

function zmienKolor()
{
    test.style.color = "red"
}
function zmienKolor2()
{
    test.style.color = "green" 
}

var test = document.getElementById("test");
var plus = document.getElementById("plus")
var minus = document.getElementById("minus")
test.addEventListener('mouseover', zmienKolor)
test.addEventListener('mouseout', zmienKolor2)
plus.addEventListener( 'click', plusSize);
minus.addEventListener('click', minusSize)

