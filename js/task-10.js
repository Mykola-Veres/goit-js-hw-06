function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsElement = document.querySelector("#controls");
const boxesAll = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const inputElement = document.querySelector("input");
let size = 30

buttonCreate.addEventListener("click", () => {
  console.log(inputElement.value);
  createBoxes(inputElement.value);
  inputElement.value = "";
});

buttonDestroy.addEventListener("click", () => {
  boxesAll.innerHTML = "";
  size = 30;

})

controlsElement.addEventListener("change", (event) => {
  let inputAsNumber = event.target.valueAsNumber;
  // if (buttonCreate.addEventListener("click", createBoxes(inputAsNumber)))
  // {createBoxes(inputAsNumber)} else
  // if (buttonDestroy.addEventListener("click", () => {
  //   controlsElement.removeEventListener;    
  //   inputElement.value = ""
  //   boxesAll.remove();
  // }));       
});
function createBoxes(amount) {
   
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const divElement = document.createElement("div");
    divElement.style.height = `${size}px`;
    divElement.style.width = `${size}px`;
    divElement.classList = "item";
    divElement.style.backgroundColor = getRandomHexColor();
    console.log("🚀divElement", divElement);    
    // divElement[i].style.height;
    boxesAll.appendChild(divElement);
    // divAllElement.push(divElement);    
};
console.log("divAllElement", divAllElement);
// const All = divAllElement.reduce((acc, el)=>  )

boxesAll.append(...divAllElement);
};

// event.currentTarget.elements

