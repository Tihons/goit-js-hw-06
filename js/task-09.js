function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const buttonRel = document.querySelector(".change-color");
const spanRel = document.querySelector("span.color");

const onChangeColorClick = buttonRel.addEventListener("click", (event) => {
  
  const currentColor = getRandomHexColor();

  document.querySelector("body").style.backgroundColor = currentColor;
 
  document.querySelector("body").style.transition = "250ms cubic-bezier(0.4, 0, 0.2, 1)";
  spanRel.textContent = currentColor;
});