const categories = document.querySelector("#categories");
const categoriesLength = categories.children.length
console.log(`Number of categories: ${categoriesLength}`);
console.log("");
const categoryFirstName = categories.firstElementChild.firstElementChild.textContent;
console.log(`Category: ${categoryFirstName}`);
const categoryFirstNumber = categories.firstElementChild.lastElementChild.children.length;
console.log(`Elements: ${categoryFirstNumber}`);
console.log("");
const categorySecondName = categories.children[1].firstElementChild.textContent;
console.log(`Category: ${categorySecondName}`);
const categorySecondNumber = categories.children[1].lastElementChild.children.length;
console.log(`Elements: ${categorySecondNumber}`);
console.log("");
const categoryThirdName = categories.lastElementChild.firstElementChild.textContent;
console.log(`Category: ${categoryThirdName}`);
const categoryThirdNumber = categories.lastElementChild.lastElementChild.children.length;
console.log(`Elements: ${categoryThirdNumber}`);
