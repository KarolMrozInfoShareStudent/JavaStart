window.onload = () => {
    const moveTarcza = document.getElementById("tarcza");
    moveTarcza.onmousemove = (e) => {
        e.target.style.left = e.clientX - e.target.width / 2 + "px";
        e.target.style.top = e.clientY - e.target.width / 2 + "px"
    };

    moveTarcza.onmouseup = (e) => e.onmouseup = null
    moveTarcza.ondragstart = (e) => {
        e.preventDefault()
    }

}