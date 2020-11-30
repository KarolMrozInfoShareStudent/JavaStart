const names = [];
const btn = document.querySelector("button");
const btnRemove = document.querySelector(".btnRemove");
const div = document.querySelector("div");
const input = document.querySelector("input");

const addName = (e) => {
  e.preventDefault();
  const newName = input.value;
  if (input.value.length) {
    for (name of names) {
      if (newName === name) {
        alert("to już jest");
        return;
      }
    }
    names.push(newName);
    // div.textContent += newName + ", ";
    div.textContent = names;
    input.value = "";
  }
};

const removeName = (e) => {
  e.preventDefault();
  const removeName = input.value;
  if (removeName.length && input.value) {
    for (name of names) {
      if (removeName === name) {
        console.log(names.indexOf(name));
        names.splice(names.indexOf(name), 1);
        console.log(names);
        div.textContent = names;
        input.value = "";
      } else {
        alert("brak dopasowania");
      }
    }
  }
  if (!names.length) {
    alert("brak pozycji do usunięcia");
  }
};

btn.addEventListener("click", addName);
btnRemove.addEventListener("click", removeName);
