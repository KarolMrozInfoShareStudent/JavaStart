window.onload = function()
{
        var moveTarcza = document.getElementById("tarcza");

        moveTarcza.onmousedown = function(event)
        {
           this.style.left = event.clientX - 100 + "px";
           this.style.top = event.clientY - 100 + "px"
        }
}