const formElement = document.querySelector(".login-form");
formElement.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
  event.preventDefault();
  const { elements: {email, password}} = event.currentTarget;
  if (email.value === "" || password.value === "")
  {
    return alert("Please fill all form correct");
  }
  const user = { 
    email:email.value,
    password:password.value,
  };
  event.currentTarget.reset();
  return console.log(user);
};
