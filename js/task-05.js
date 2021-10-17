const inputValue = document.querySelector("#name-input");
const spanValue = document.querySelector("#name-output");

inputValue.addEventListener("input", (event) => {
  spanValue.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "")
  {spanValue.textContent = "Anonymous"};
});


