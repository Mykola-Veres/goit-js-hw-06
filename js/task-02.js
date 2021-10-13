const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = (arrayNames) => {
  return arrayNames.map(products => {
  const createElementItem = document.createElement("li");
  createElementItem.classList.add("item");
  createElementItem.textContent = products;  
  return createElementItem;
  })
};

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.prepend(...ingredientsList(ingredients));