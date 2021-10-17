function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const spanColorElement = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  const bodyBackground = document.body.style.backgroundColor = getRandomHexColor();
  spanColorElement.textContent = bodyBackground;  
});