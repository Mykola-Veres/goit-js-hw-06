const categories = document.querySelector("#categories");
const categoriesLength = categories.children.length
console.log(`Number of categories: ${categoriesLength}`);
console.log("");

const itemElement = document.querySelectorAll(".item");
itemElement.forEach(item => {
console.log(`Category: ${item.firstElementChild.textContent}`);
console.log(`Elements: ${item.lastElementChild.childElementCount}`);
console.log("");});
