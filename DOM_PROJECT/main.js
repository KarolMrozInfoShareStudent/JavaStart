const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  // console.log("submint");
  const element = document.createElement(node);
  if (txt) {
    const text = document.createTextNode(txt);
    element.appendChild(text);
  }
  if (attr) {
    element.setAttribute(attr, value);
    document.querySelector(".content").appendChild(element);
  }
};

const searchElements = (e, nameElemnet) => {
  e.preventDefault();
  const infoELemnt = document.querySelector(".result");
  infoELemnt.textContent = "";
  const elements = document.querySelectorAll(nameElemnet);
  // console.log([...elements]);
  if (elements.length) {
    infoELemnt.innerHTML = `<p class='result_info'> W tym elemencie mamy ${elements.length} elementów ${nameElemnet}`;
    showInfo(elements, infoELemnt);
  } else {
    infoELemnt.innerHTML = `<p class='result_info'> Nie znaleziono elementów o nazwie ${nameElemnet}`;
    return;
  }
};

const showInfo = (elements, infoELemnt) => {
  console.log(elements, infoELemnt);
  elements.forEach((elment) => {
    const item = document.createElement("div");
    item.className = "element-info";
    item.innerHTML = `
    <div>${elment.nodeName}</div>
    <div>klasa/klasy: ${elment.className}</div>
    <div>Szerokość elementu: ${elment.offsetWidth}</div>
    <div>Wysokość elementu: ${elment.offsetHeight}</div>
    <div>Liczba elementów dzieci: ${elment.childElementCount}</div>
    `;
    infoELemnt.appendChild(item);
  });
};

//nasluchiwanie

const addForm = document.querySelector(".form--add");
addForm.addEventListener("submit", (e) =>
  addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
  )
);

const searchForm = document.querySelector(".form--search");
searchForm.addEventListener("submit", (e) =>
  searchElements(e, searchForm.elements["searching-element"].value)
);
