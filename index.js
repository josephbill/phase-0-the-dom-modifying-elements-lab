// Write your code here!
const mainDiv = document.getElementById("main");
//DOM removing an element
mainDiv.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Joseph is the champion!";