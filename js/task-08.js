const loginFormRel = document.querySelector(".login-form");

loginFormRel.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  const enteredData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  if (enteredData.email === "" || enteredData.password === "") {
    return alert("All fields must be filled!");
  }

  console.log(enteredData);

  loginFormRel.reset();
}

const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

spanRef.style.fontSize = `${inputRef.value}px`;

const onFontSizeInput = inputRef.addEventListener("input", (event) => {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
});