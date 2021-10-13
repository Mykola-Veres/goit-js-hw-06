const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", (event) => {
  if (inputElement.value.length !== Number(inputElement.dataset.length))
  {inputElement.classList.add("invalid");
  }
  else {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  }
});

