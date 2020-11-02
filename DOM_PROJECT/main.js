const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  console.log("submint");
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
  console.log(nameElemnet);
  const infoELemnt = document.querySelector(".result");
  const elements = document.querySelectorAll(nameElemnet);
  if (elements.length) {
    infoELemnt.innerHTML = `<p class='result_info'> W tym elemencie mamy ${elements.length} elementów ${nameElemnet}`;
  } else {
    infoELemnt.innerHTML = `<p class='result_info'> Nie znaleziono elementów o nazwie ${nameElemnet}`;
    return;
  }
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
