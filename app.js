let inputbox = document.getElementById("input");
const button = document.getElementById("button");
let display = document.getElementById("result");
let remaining = document.getElementById("remaining");
let howMany = document.getElementById("chances");
let theNumber = Math.trunc(Math.random() * 99 + 1);
let times = 7;
let order = 1;
button.addEventListener("click", () => {
  let inputValue = inputbox.value;
  if (inputValue > theNumber) {
    times--;
    display.innerText += `${order}) You Entered ${inputValue} => Enter a number between ${inputValue} and 0`;
    let brTags = document.createElement("br");
    display.appendChild(brTags);
    howMany.innerText = times;
  } else if (inputValue < theNumber) {
    times--;
    display.innerText += `${order}) You Entered ${inputValue} => Enter a number between ${inputValue} and 100`;
    let brTags = document.createElement("br");
    display.appendChild(brTags);
    howMany.innerText = times;
  } else if ((inputValue = theNumber)) {
    display.innerText += `${order}) You Entered ${inputValue} => You Guessed right`;
    let brTags = document.createElement("br");
    display.appendChild(brTags);
    howMany.innerText = times;
  }
  order++;
});