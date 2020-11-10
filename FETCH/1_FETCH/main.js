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
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

document.querySelector(".generator").addEventListener("submit", getUsers);
