const categoriesEl = document.querySelector("#categories");
const itemEl = categoriesEl.querySelectorAll(".item");
// console.log(categoriesEl);
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((category) => {
  const categoriesNameEl = category.querySelector("h2").textContent;

  const categoryElementsEl = category.querySelectorAll("li").length;
  console.log(`Category: ${categoriesNameEl}`);
  console.log(`Elements: ${categoryElementsEl}`);
});
