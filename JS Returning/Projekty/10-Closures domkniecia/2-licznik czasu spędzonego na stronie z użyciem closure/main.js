

const time = (liczba) => {
    let second = liczba;

    const addSecond = () => {
        if (second > 59) {
            second = 0
        }
        document.body.textContent = `${second++} aktualny czas przebywania na stoenie`
    }
    setInterval(addSecond, 1000)
    return addSecond
}

time(0)

