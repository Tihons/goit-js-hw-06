function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
}
function handleInput(event) {
  const amount = event.target.value;
  console.log(amount);
  return amount;
}

function createBoxes() {
  const amount = handleInput();
  let widthItem = 30;
  let heightItem = 30;
  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const boxMarkup = `<div style="width:${widthItem}px; height:${heightItem}px; background-color:${color}"></div>`;
    boxesMarkup += boxMarkup;

    widthItem += 10;
    heightItem += 10;
  }

  boxesContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
