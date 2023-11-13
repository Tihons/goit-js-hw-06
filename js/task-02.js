const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liIngredients = document.querySelector("#ingredients")
ingredients.forEach((ingredient)=>
{const liItem = document.createElement("li");

liItem.textContent = `${ingredient}`;
liItem.classList.add=("item")
liIngredients.append(liItem)})