const clock = () => {
    const time = new Date();
    // console.log(time.toLocaleString());
    // console.log(time.toLocaleDateString());
    const seconds = time.getSeconds();
    const minutes = time.getMinutes()
    const hours = time.getHours();

    document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`;

}

setInterval(clock, 1000)