window.onload = function()
{
        var moveTarcza = document.getElementById("tarcza");

        moveTarcza.onmousemove = function(event)
        {
           this.style.left = event.clientX - this.width / 2  + "px";
           this.style.top = event.clientY - this.width / 2 + "px"
        };

        moveTarcza.onmouseup = function()
        {
            this.onmouseup = null
        };
        
        moveTarcza.ondragstart = function(e)
        {
            e.preventDefault()
        }

}