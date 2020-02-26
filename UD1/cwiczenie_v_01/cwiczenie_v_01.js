window.onload = () => {
    const toTopButton = document.getElementById("topButton");
    window.onscroll = () => {
        const toTopButton = document.getElementById("topButton");
        const testaxisY = document.getElementById("axisY");

        window.pageYOffset > 300 ? toTopButton.style.display = "block" : toTopButton.style.display = "none"
        testaxisY.textContent = `${window.pageYOffset} px`
    };
    toTopButton.onclick = () => {
        window.scrollBy(0, -1 * window.pageYOffset)
        // console.log(pageYOffset)
    };
};