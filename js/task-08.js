const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
  event.preventDefault();
  const { elements: {email, password}} = event.currentTarget;
  if (email.value === "" || password.value === "")
  {
    return console.log("Please fill all form correct");
  }
  
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

console.log("🚀", formElement.elements.email.value)

