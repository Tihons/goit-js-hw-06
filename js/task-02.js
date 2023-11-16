const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liIngredients = document.querySelector("#ingredients")
const markup =[]
ingredients.forEach((ingredient)=>
{const liItem = document.createElement("li");

liItem.textContent = `${ingredient}`;
liItem.classList.add=("item")
markup.push(liItem)})
liIngredients.append(...markup)