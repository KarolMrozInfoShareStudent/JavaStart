const getUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector('[name = "users-number"]').value;
  const usersGender = document.querySelector('[name = "gender"]').value;
  //   console.log(usersNumber, usersGender);

  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    usersGender === "both" ? "male,femle" : usersGender
  }`;
  fetch(url)
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        alert("To nie jest odpowiedź 200");
      } else {
        return response.json();
      }
    })
    .then((json) => showUsers(json.results))
    .catch((err) => console.log(err));
};

const showUsers = (users) => {
  const resultArea = document.querySelector(".user-list");
  resultArea.textContent = "";

  users.forEach((user) => {
    const item = document.createElement("div");
    item.className = "user";
    item.innerHTML = `
       <div class="user_name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()}</div>
       <img class="user_image" src="${user.picture.medium}">
       `;
    resultArea.appendChild(item);
  });
};
document.querySelector(".generator").addEventListener("submit", getUsers);
