let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterValueAll = document.querySelector("#value");

const targetButtonClickHandler = () => { 
  counterValue += 1;
  counterValueAll.textContent = counterValue;
};
buttonDecrement.addEventListener("click", function () {
  counterValue -= 1;
  counterValueAll.textContent = counterValue;
});
buttonIncrement.addEventListener("click", targetButtonClickHandler);
