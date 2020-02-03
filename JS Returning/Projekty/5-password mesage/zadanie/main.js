// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
const div = document.querySelector('.message')


const showMessage = (e) => {
    div.textContent = ''
    const text = e.target.value;
    // console.log(text)
    const passwordsLower = passwords.map(item => (
        item.toLowerCase()
    ))
    passwordsLower.forEach((password, index) => {
        if (password === text.toLowerCase()) {
            div.textContent = messages[index]
        }
    })
}

input.addEventListener("input", showMessage)