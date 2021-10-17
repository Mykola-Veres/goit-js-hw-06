const fontSizeElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

const handler =()=> {textElement.style.fontSize = fontSizeElement.value + "px"};
handler ();
fontSizeElement.addEventListener("input", handler);
