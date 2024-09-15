function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}

const token = localStorage.getItem("token");
const template = getElement("template");
const elWrapper = getElement(".item_block");

if (!token) {
  window.location.replace("../index.html");
}

fetch("https://fakestoreapi.com/auth/login", {
  method: "POST",
  body: JSON.stringify({
    username: "mor_2314",
    password: "83r5^_",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));

let usersArray = [];


const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const submitButton = document.querySelector(".submit"); //

const usersListContainer = document.createElement("div");
document.body.appendChild(usersListContainer);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();

  if (firstName === "" || lastName === "" || email === "") {
    alert("Please fill out all fields");
    return;
  }

  const user = {
    firstName,
    lastName,
    email,
  };

  usersArray.push(user);
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";

  displayUsers(usersArray);
});

function displayUsers(users) {
  usersListContainer.innerHTML = "";
  users.map((user, index) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <p><strong>User ${index + 1}:</strong></p>
      <p>First Name: ${user.firstName}</p>
      <p>Last Name: ${user.lastName}</p>
      <p>Email: ${user.email}</p>
      <hr>
    `;

    usersListContainer.appendChild(userDiv);
  });
}
