window.onload = function (){
    var toTopButton = document.getElementById("topButton");
    

    window.onscroll = function()
    {
        var testaxisY = document.getElementById("axisY");
        testaxisY.innerText = window.pageYOffset + " px"
    }


    toTopButton.onclick = function()
    {
        window.scrollBy(0, 100)
        // console.log(pageYOffset)
    };
};