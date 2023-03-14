const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const option = ingredients[0];
// console.log(option);

// const liEl = document.createElement("li");
// liEl.classList.add("item");
// liEl.textContent = option;
// console.log(liEl);
const ingredientsContainerEl = document.querySelector("#ingredients");

const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const option = ingredients[i];
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = option;
  elements.push(liEl);
}
console.log(elements);

ingredientsContainerEl.append(...elements);
