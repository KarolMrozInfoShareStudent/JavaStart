window.onload = function (){
    var toTopButton = document.getElementById("topButton");
    

    window.onscroll = function()
    {   
        var toTopButton = document.getElementById("topButton");
        var testaxisY = document.getElementById("axisY");

        if(window.pageYOffset > 300)
        {
            toTopButton.style.display = "block"
        }else{
            toTopButton.style.display = "none"
        }
        testaxisY.innerText = window.pageYOffset + " px"

    };


    toTopButton.onclick = function()
    {
        window.scrollBy(0, -1 * window.pageYOffset)
        // console.log(pageYOffset)
    };
};