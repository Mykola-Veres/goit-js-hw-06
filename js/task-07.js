const fontSizeElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeElement.addEventListener("input", (event) => {  
  textElement.style.fontSize = event.currentTarget.value + "px";
  });

